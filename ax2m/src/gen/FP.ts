/**
 * Created by MIC on 2016/3/31.
 */
import {ClassInfo} from "../info/ClassInfo";
import {XmlNode} from "../XmlNode";
import {U} from "../U";
import {FieldInfo} from "../info/FieldInfo";
import {FieldType} from "../info/FieldType";
import {ArgInfo} from "../info/ArgInfo";
import {ModifierStr} from "../info/Modifier";
import * as Chalk from "chalk";

/**
 * File Processor
 */
export abstract class FP {

    /**
     * Reads 'comp-classes.xml'.
     * @param node {XmlNode}
     * @param g {Map<string, ClassInfo>}
     */
    static read1(node: XmlNode, g: Map<string, ClassInfo>): void {
        var completionLists = node["completion-lists"]["list"];
        for (var j = 0; j < completionLists.length; ++j) {
            for (var i = 0; i < completionLists[j]["item"].length; ++i) {
                var item = completionLists[j]["item"][i];
                var clazz = createClass(item.$["name"], item.$["d"]);
                g.set(clazz.name, clazz);
            }
        }
    }

    /**
     * Reads 'comp-funcs_props.xml', 'comp-funcs_props-js.xml', 'comp-objfields.xml'.
     * @param node {XmlNode}
     * @param g {Map<string, ClassInfo>}
     */
    static read2(node: XmlNode, g: Map<string, ClassInfo>): void {
        var completionLists = node["completion-lists"]["list"];
        for (var j = 0; j < completionLists.length; ++j) {
            var list = completionLists[j];
            var listName = <string>list.$["name"];
            var membersStatic = U.parseBool(<string>list.$["static"]);
            var clazz: ClassInfo;
            if (!g.has(listName)) {
                console.log(`${Chalk.yellow("WARN:")} class "${Chalk.magenta(listName)}" is not found, creating.`);
                clazz = createClass(listName, "ERR: NO CLASS DESC");
                g.set(clazz.name, clazz);
            } else {
                clazz = g.get(listName);
            }
            for (var i = 0; i < list["item"].length; ++i) {
                var item = list["item"][i];
                var field = createField(
                    item.$["name"],
                    item.$["d"] ? item.$["d"] : null,
                    item.$["type"],
                    item.$["return"],
                    membersStatic
                );
                clazz.fields.set(field.name, field);
            }
        }
    }

    /**
     * Reads 'insights.xml'.
     * @param node {XmlNode}
     * @param g {Map<string, ClassInfo>}
     */
    static readInsights(node: XmlNode, g: Map<string, ClassInfo>): void {
        var memberFields = node["insight"]["f"];
        for (var i = 0; i < memberFields.length; ++i) {
            var fieldNode = memberFields[i];
            var mfSourceSpace = fieldNode.$["source"].indexOf(" ");
            var mfSource: string;
            if (mfSourceSpace >= 0) {
                mfSource = fieldNode.$["source"].substring(0, mfSourceSpace);
            } else {
                mfSource = fieldNode.$["source"];
            }

            var clazz: ClassInfo;
            if (!g.has(mfSource)) {
                console.log(`${Chalk.yellow("WARN:")} class "${Chalk.magenta(mfSource)}" is not found, creating.`);
                clazz = createClass(mfSource, "ERR: NO CLASS DESC");
                g.set(clazz.name, clazz);
            } else {
                clazz = g.get(mfSource);
            }

            var mfMember = fieldNode.$["name"].substring(mfSource.length + 1);
            var member: FieldInfo;
            if (!clazz.fields.has(mfMember)) {
                console.log(`${Chalk.yellow("WARN:")} Member "${Chalk.cyan(mfMember)}" of class "${Chalk.magenta(mfSource)}" is not found, creating.`);
                member = createField(
                    mfMember,
                    "ERR: NO COMP DESC",
                    FieldType.Function,
                    fieldNode.$["type"],
                    false
                );
                clazz.fields.set(member.name, member);
            } else {
                member = clazz.fields.get(mfMember);
            }
            member.descInsight = fieldNode.$["d"];
            member.rTypeInsight = fieldNode.$["type"];
            member.modifiers = fieldNode.$["modifiers"] ? fieldNode.$["modifiers"] : null;
            member.modifiersV = U.parseModifier(member.modifiers);
            member.remarks = fieldNode.$["remarks"] ? fieldNode.$["remarks"] : null;
            member.returnDesc = fieldNode.$["return"] ? fieldNode.$["return"] : null;

            if (fieldNode["a"]) {
                member.args = new Map();
                for (var j = 0; j < fieldNode["a"].length; ++j) {
                    var argNode = fieldNode["a"][j];
                    var arg = createArg(argNode.$["name"], argNode.$["type"], argNode.$["d"]);
                    arg.defaultValue = argNode.$["default"] ? argNode.$["default"] : null;
                    arg.modifiers = argNode.$["modifiers"] ? argNode.$["modifiers"] : null;
                    arg.modifiersV = U.parseModifier(arg.modifiers);
                    member.args.set(arg.name, arg);
                }
            } else {
                member.args = null;
            }
        }
    }

    /**
     * Reads 'insights-js.xml'.
     * @param node {XmlNode}
     * @param g {Map<string, FieldInfo>}
     */
    static readInsightsG(node: XmlNode, g: Map<string, FieldInfo>): void {
        var funcList = node["insight"]["f"];
        for (var i = 0; i < funcList.length; ++i) {
            var funcNode = funcList[i];
            var isStatic = funcNode.$["modifiers"] && funcNode.$["modifiers"].indexOf(ModifierStr.Static) >= 0;
            var mf = createField(funcNode.$["name"], null, FieldType.Function, funcNode.$["type"], isStatic);
            mf.descInsight = funcNode.$["d"];
            mf.modifiers = funcNode.$["modifiers"] ? funcNode.$["modifiers"] : null;
            mf.modifiersV = U.parseModifier(mf.modifiers);
            mf.rTypeInsight = funcNode.$["type"] ? funcNode.$["type"] : null;
            mf.returnDesc = funcNode.$["return"] ? funcNode.$["return"] : null;
            mf.remarks = funcNode.$["remarks"] ? funcNode.$["remarks"] : null;
            if (funcNode["a"]) {
                mf.args = new Map();
                for (var j = 0; j < funcNode["a"].length; ++j) {
                    var argNode = funcNode["a"][j];
                    var arg = createArg(argNode.$["name"], argNode.$["type"], argNode.$["d"]);
                    arg.defaultValue = argNode.$["default"] ? argNode.$["default"] : null;
                    arg.modifiers = argNode.$["modifiers"] ? argNode.$["modifiers"] : null;
                    arg.modifiersV = U.parseModifier(arg.modifiers);
                    mf.args.set(arg.name, arg);
                }
            } else {
                mf.args = null;
            }
            g.set(mf.name, mf);
        }
    }

}

function createClass(name: string, description?: string): ClassInfo {
    return <ClassInfo>{
        name: name,
        description: typeof description !== "undefined" ? description : null,
        fields: new Map()
    };
}

function createField(name: string, description: string, fieldType: string, returnType: string, isStatic: boolean): FieldInfo {
    return <FieldInfo>{
        name: name,
        descComp: description,
        fieldType: fieldType,
        rTypeComp: returnType,
        isStatic: isStatic
    };
}

function createArg(name: string, type: string, description: string): ArgInfo {
    return <ArgInfo>{
        name: name,
        type: type,
        description: description
    };
}
