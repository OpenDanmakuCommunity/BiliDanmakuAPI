"use strict";
const os = require("os");
const fs = require("fs");
const path = require("path");
const FieldType_1 = require("../info/FieldType");
const Modifier_1 = require("../info/Modifier");
let EOL = os.EOL;
let EOL2 = EOL + EOL;
if (!Buffer.prototype.w) {
    Buffer.prototype.w = function (content) {
        this.ptr += this.write(content, this.ptr);
    };
}
class GP {
    static gen(g, f, outDir) {
        if (fs.existsSync(outDir)) {
            outDir = path.resolve(outDir);
            rmAll(outDir);
        }
        generateClasses(g, outDir);
        generateGlobalFunctions(f, outDir);
    }
    static filter(g, f) {
        var invalidClassNames = ["Boolean", "Number", "Object", "String", "Function", "null", "undefined"];
        for (var [_, clazz] of g) {
            if (invalidClassNames.indexOf(clazz.name) >= 0) {
                g.delete(clazz.name);
            }
        }
    }
}
exports.GP = GP;
function generateClasses(g, outDir) {
    ensureDirExists(outDir);
    for (var [_1, _2] of g) {
        var clazz = _2;
        var markdownFileName = `doc-${clazz.name}.md`;
        var buf = new Buffer(50 * 1024);
        buf.fill(0);
        buf.ptr = 0;
        writeClass(clazz, buf);
        var fullPath = path.join(outDir, markdownFileName);
        var fileContent = buf.toString("utf-8", 0, buf.ptr);
        fs.writeFileSync(fullPath, fileContent, "utf-8");
    }
}
function generateGlobalFunctions(g, outDir) {
    ensureDirExists(outDir);
    for (var [_1, _2] of g) {
        var func = _2;
        var markdownFileName = `doc-Functions.md`;
        var buf = new Buffer(50 * 1024);
        buf.fill(0);
        buf.ptr = 0;
        writeFuncs(g, buf);
        var fullPath = path.join(outDir, markdownFileName);
        var fileContent = buf.toString("utf-8", 0, buf.ptr);
        fs.writeFileSync(fullPath, fileContent, "utf-8");
    }
}
function writeClass(clazz, buf) {
    var content;
    content = mdescape(clazz.name);
    buf.w(`# ${content}${EOL2}`);
    content = mdescape(clazz.description);
    if (content) {
        buf.w(`*${content}*${EOL2}`);
    }
    for (var [_1, _2] of clazz.fields) {
        var field = _2;
        var contentBase = `${clazz.name}.${field.name}`;
        content = `- [${mdescape(contentBase) + (field.fieldType === FieldType_1.FieldType.Function ? "()" : "")}](#${contentBase})`;
        buf.w(`${content}${EOL}`);
    }
    buf.w(EOL);
    for (var [_1, _2] of clazz.fields) {
        var field = _2;
        writeField(field, buf, clazz.name);
    }
}
function writeField(field, buf, className) {
    var content;
    var fullFieldName = (className ? className + "." : "") + field.name;
    content = mdescape(fullFieldName);
    if (field.fieldType === FieldType_1.FieldType.Function) {
        content += "()";
    }
    buf.w(`## ${content}${EOL2}`);
    if (field.fieldType === FieldType_1.FieldType.Function) {
        content = "**函数原型：**";
        buf.w(`${content}${EOL2}`);
        buf.w("```actionscript" + EOL);
        content = `function ${field.name}(`;
        if (field.args && field.args.size > 0) {
            var i = 0;
            for (var [_1, _2] of field.args) {
                var arg = _2;
                if (arg.defaultValue) {
                    content += `[${arg.name} = ${arg.defaultValue}]`;
                }
                else {
                    var isRest = (arg.modifiersV & Modifier_1.ModifierInt.Hidden) !== 0;
                    if (isRest) {
                        content += `[${arg.name}]`;
                    }
                    else {
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
    }
    else {
        content = mdescape(`> ${field.descComp || field.descInsight}`);
    }
    buf.w(`${content}${EOL2}`);
    var returnType;
    if (field.rTypeComp && field.rTypeInsight) {
        if (field.rTypeComp !== field.rTypeInsight) {
            returnType = `\`${field.rTypeComp}\`/\`${field.rTypeInsight}\``;
        }
        else {
            returnType = `\`${field.rTypeComp}\``;
        }
    }
    else {
        returnType = field.rTypeComp || field.rTypeInsight;
        if (!returnType) {
            returnType = "(未知)";
        }
        else {
            returnType = `\`${returnType}\``;
        }
    }
    var returnDesc = field.returnDesc;
    if (returnDesc) {
        content = `**返回：** ${returnDesc} (${returnType})`;
    }
    else {
        content = `**返回：** ${returnType}`;
    }
    buf.w(`${content}${EOL2}`);
    if (field.args && field.args.size > 0) {
        content = `| 参数 | 类型 | 描述 |${EOL}|---|---|---|${EOL}`;
        buf.w(content);
        for (var [_1, _2] of field.args) {
            var arg = _2;
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
function writeFuncs(g, buf) {
    var content;
    content = `# 全局函数${EOL2}`;
    buf.w(content);
    for (var [_1, _2] of g) {
        var func = _2;
        var contentBase = `${func.name}`;
        content = `- [${mdescape(contentBase) + (func.fieldType === FieldType_1.FieldType.Function ? "()" : "")}](#${contentBase})`;
        buf.w(`${content}${EOL}`);
    }
    buf.w(EOL);
    for (var [_1, _2] of g) {
        var func = _2;
        writeField(func, buf, null);
    }
}
function ensureDirExists(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}
function rmAll(s) {
    var stats = fs.statSync(s);
    if (stats.isFile()) {
        fs.unlinkSync(s);
    }
    else if (stats.isDirectory()) {
        var fileList = fs.readdirSync(s);
        if (fileList && fileList.length > 0) {
            for (var i = 0; i < fileList.length; ++i) {
                rmAll(path.join(s, fileList[i]));
            }
        }
        fs.rmdirSync(s);
    }
    else {
        console.error(`ERR: Unknown stats for "${s}".`);
    }
}
let mdreg = /\[|\]|\*|_/g;
function mdescape(s) {
    return s.replace(mdreg, "\\$&");
}
//# sourceMappingURL=GP.js.map