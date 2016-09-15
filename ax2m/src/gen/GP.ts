/**
 * Created by MIC on 2016/4/2.
 */

import * as os from "os";
import * as fs from "fs";
import * as path from "path";
import {ClassInfo} from "../info/ClassInfo";
import {FieldInfo} from "../info/FieldInfo";
import {ArgInfo} from "../info/ArgInfo";
import {FieldType} from "../info/FieldType";
import {ModifierInt} from "../info/Modifier";

let EOL:string = os.EOL;
let EOL2:string = EOL + EOL;

interface BufferWithPtr extends Buffer {
    ptr:number;
    w(content:string):void;
}

if (!(<any>Buffer.prototype).w) {
    // No arrow functions here because when compiled to ES2015 (ES6/ES Harmony), the arrow functions will be preserved,
    // and 'this' will point to the upper level of the call chain - the main module 'GP', in this case. When targeting
    // ES5, the arrow function will be compiled to native 'function' implementation, and 'this' works as expected. In
    // conclusion, to avoid unconscious errors, just use the full 'function' form, here.
    //
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions :
    // An arrow function expression has a shorter syntax compared to function expressions and lexically binds the `this`
    // value (does not bind its own `this`, `arguments`, `super`, or `new.target`). Arrow functions are always anonymous.
    (<any>Buffer.prototype).w = function (content:string):void {
        this.ptr += this.write(content, this.ptr);
    };
}

export abstract class GP {

    static gen(g:Map<string, ClassInfo>, f:Map<string, FieldInfo>, outDir:string):void {
        if (fs.existsSync(outDir)) {
            outDir = path.resolve(outDir);
            rmAll(outDir);
        }
        generateClasses(g, outDir);
        generateGlobalFunctions(f, outDir);
    }

    static filter(g:Map<string, ClassInfo>, f:Map<string, FieldInfo>):void {
        var invalidClassNames = ["Boolean", "Number", "Object", "String", "Function", "null", "undefined"];
        for (var [_, clazz] of g) {
            if (invalidClassNames.indexOf(clazz.name) >= 0) {
                g.delete(clazz.name);
            }
        }
    }

}

function generateClasses(g:Map<string, ClassInfo>, outDir:string):void {
    ensureDirExists(outDir);
    for (var [_1, _2] of g) {
        var clazz = <ClassInfo>_2;
        var markdownFileName = `doc-${clazz.name}.md`;
        var buf:BufferWithPtr = <BufferWithPtr>new Buffer(50 * 1024);
        buf.fill(0);
        buf.ptr = 0;
        writeClass(clazz, buf);
        var fullPath = path.join(outDir, markdownFileName);
        var fileContent = buf.toString("utf-8", 0, buf.ptr);
        fs.writeFileSync(fullPath, fileContent, "utf-8");
    }
}

function generateGlobalFunctions(g:Map<string, FieldInfo>, outDir:string):void {
    ensureDirExists(outDir);
    for (var [_1, _2] of g) {
        var func = <FieldInfo>_2;
        var markdownFileName = `doc-Functions.md`;
        var buf:BufferWithPtr = <BufferWithPtr>new Buffer(50 * 1024);
        buf.fill(0);
        buf.ptr = 0;
        writeFuncs(g, buf);
        var fullPath = path.join(outDir, markdownFileName);
        var fileContent = buf.toString("utf-8", 0, buf.ptr);
        fs.writeFileSync(fullPath, fileContent, "utf-8");
    }
}

function writeClass(clazz:ClassInfo, buf:BufferWithPtr):void {
    var content:string;
    content = mdescape(clazz.name);
    buf.w(`# ${content}${EOL2}`);
    content = mdescape(clazz.description);
    if (content) {
        buf.w(`*${content}*${EOL2}`);
    }

    for (var [_1, _2] of clazz.fields) {
        var field = <FieldInfo>_2;
        var contentBase = `${clazz.name}.${field.name}`;
        content = `- [${mdescape(contentBase) + (field.fieldType === FieldType.Function ? "()" : "")}](#${contentBase})`;
        buf.w(`${content}${EOL}`);
    }
    buf.w(EOL);

    for (var [_1, _2] of clazz.fields) {
        var field = <FieldInfo>_2;
        writeField(field, buf, clazz.name);
    }
}

function writeField(field:FieldInfo, buf:BufferWithPtr, className:string):void {
    var content:string;
    var fullFieldName = (className ? className + "." : "") + field.name;
    content = mdescape(fullFieldName);
    if (field.fieldType === FieldType.Function) {
        content += "()";
    }
    buf.w(`## ${content}${EOL2}`);

    if (field.fieldType === FieldType.Function) {
        content = "**函数原型：**";
        buf.w(`${content}${EOL2}`);
        buf.w("```actionscript" + EOL);
        content = `function ${field.name}(`;
        if (field.args && field.args.size > 0) {
            var i = 0;
            for (var [_1, _2] of field.args) {
                var arg = <ArgInfo>_2;
                if (arg.defaultValue) {
                    content += `[${arg.name} = ${arg.defaultValue}]`;
                } else {
                    var isRest = (arg.modifiersV & ModifierInt.Hidden) !== 0;
                    if (isRest) {
                        content += `[${arg.name}]`;
                    } else {
                        content += arg.name;
                    }
                }
                if (i < field.args.size - 1) {
                    content += ", ";
                }
                ++i;
            }
        }
        content += ");";
        buf.w(content + EOL);
        buf.w("```" + EOL2);
    }

    if (field.descComp && field.descInsight) {
        content = mdescape(`> ${field.descComp}${EOL}>${EOL}> ${field.descInsight}`);
    } else {
        content = mdescape(`> ${field.descComp || field.descInsight}`);
    }
    buf.w(`${content}${EOL2}`);
    var returnType:string;
    if (field.rTypeComp && field.rTypeInsight) {
        if (field.rTypeComp !== field.rTypeInsight) {
            returnType = `\`${field.rTypeComp}\`/\`${field.rTypeInsight}\``;
        } else {
            returnType = `\`${field.rTypeComp}\``;
        }
    } else {
        returnType = field.rTypeComp || field.rTypeInsight;
        if (!returnType) {
            returnType = "(未知)";
        } else {
            returnType = `\`${returnType}\``;
        }
    }
    var returnDesc = field.returnDesc;
    if (returnDesc) {
        content = `**返回：** ${returnDesc} (${returnType})`;
    } else {
        content = `**返回：** ${returnType}`;
    }
    buf.w(`${content}${EOL2}`);

    if (field.args && field.args.size > 0) {
        content = `| 参数 | 类型 | 描述 |${EOL}|---|---|---|${EOL}`;
        buf.w(content);
        for (var [_1, _2] of field.args) {
            var arg = <ArgInfo>_2;
            buf.w(`| \`${arg.name}\` | \`${arg.type}\` | ${arg.description} |${EOL}`);
        }
        buf.w(EOL);
    }

    if (field.remarks) {
        buf.w(`**注：**${EOL2}`);
        var remarks = field.remarks.replace(/\r\n/g, `${EOL}>${EOL}> `);
        buf.w(`> ${remarks}${EOL2}`);
    }
}

function writeFuncs(g:Map<string, FieldInfo>, buf:BufferWithPtr):void {
    var content:string;
    content = `# 全局函数${EOL2}`;
    buf.w(content);
    for (var [_1, _2] of g) {
        var func = <FieldInfo>_2;
        var contentBase = `${func.name}`;
        content = `- [${mdescape(contentBase) + (func.fieldType === FieldType.Function ? "()" : "")}](#${contentBase})`;
        buf.w(`${content}${EOL}`);
    }
    buf.w(EOL);
    for (var [_1, _2] of g) {
        var func = <FieldInfo>_2;
        writeField(func, buf, null);
    }
}

function ensureDirExists(dir:string):void {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}

/**
 * Recursively removes all files and directories in a path.
 * @param s {String} The absolute path of a file or directory.
 */
function rmAll(s:string):void {
    var stats = fs.statSync(s);
    if (stats.isFile()) {
        fs.unlinkSync(s);
    } else if (stats.isDirectory()) {
        var fileList = fs.readdirSync(s);
        if (fileList && fileList.length > 0) {
            for (var i = 0; i < fileList.length; ++i) {
                rmAll(path.join(s, fileList[i]));
            }
        }
        fs.rmdirSync(s);
    } else {
        console.error(`ERR: Unknown stats for "${s}".`)
    }
}

let mdreg = /\[|\]|\*|_/g;

/**
 * Markdown escape
 * @param s {String}
 * @returns {String}
 */
function mdescape(s:string):string {
    return s.replace(mdreg, "\\$&");
}
