"use strict";
const U_1 = require("../U");
const FieldType_1 = require("../info/FieldType");
const Modifier_1 = require("../info/Modifier");
class FP {
    static read1(node, g) {
        var completionLists = node["completion-lists"]["list"];
        for (var j = 0; j < completionLists.length; ++j) {
            for (var i = 0; i < completionLists[j]["item"].length; ++i) {
                var item = completionLists[j]["item"][i];
                var clazz = createClass(item.$["name"], item.$["d"]);
                g.set(clazz.name, clazz);
            }
        }
    }
    static read2(node, g) {
        var completionLists = node["completion-lists"]["list"];
        for (var j = 0; j < completionLists.length; ++j) {
            var list = completionLists[j];
            var listName = list.$["name"];
            var membersStatic = U_1.U.parseBool(list.$["static"]);
            var clazz;
            if (!g.has(listName)) {
                console.warn(`WARN: class "${listName}" is not found, creating.`);
                clazz = createClass(listName, "ERR: NO CLASS DESC");
                g.set(clazz.name, clazz);
            }
            else {
                clazz = g.get(listName);
            }
            for (var i = 0; i < list["item"].length; ++i) {
                var item = list["item"][i];
                var field = createField(item.$["name"], item.$["d"] ? item.$["d"] : null, item.$["type"], item.$["return"], membersStatic);
                clazz.fields.set(field.name, field);
            }
        }
    }
    static readInsights(node, g) {
        var memberFields = node["insight"]["f"];
        for (var i = 0; i < memberFields.length; ++i) {
            var fieldNode = memberFields[i];
            var mfSourceSpace = fieldNode.$["source"].indexOf(" ");
            var mfSource;
            if (mfSourceSpace >= 0) {
                mfSource = fieldNode.$["source"].substring(0, mfSourceSpace);
            }
            else {
                mfSource = fieldNode.$["source"];
            }
            var clazz;
            if (!g.has(mfSource)) {
                console.warn(`WARN: class "${mfSource}" is not found, creating.`);
                clazz = createClass(mfSource, "ERR: NO CLASS DESC");
                g.set(clazz.name, clazz);
            }
            else {
                clazz = g.get(mfSource);
            }
            var mfMember = fieldNode.$["name"].substring(mfSource.length + 1);
            var member;
            if (!clazz.fields.has(mfMember)) {
                console.warn(`ERR: Member "${mfMember}" of class "${mfSource}" is not found, creating.`);
                member = createField(mfMember, "ERR: NO COMP DESC", FieldType_1.FieldType.Function, fieldNode.$["type"], false);
                clazz.fields.set(member.name, member);
            }
            else {
                member = clazz.fields.get(mfMember);
            }
            member.descInsight = fieldNode.$["d"];
            member.rTypeInsight = fieldNode.$["type"];
            member.modifiers = fieldNode.$["modifiers"] ? fieldNode.$["modifiers"] : null;
            member.modifiersV = U_1.U.parseModifier(member.modifiers);
            member.remarks = fieldNode.$["remarks"] ? fieldNode.$["remarks"] : null;
            member.returnDesc = fieldNode.$["return"] ? fieldNode.$["return"] : null;
            if (fieldNode["a"]) {
                member.args = new Map();
                for (var j = 0; j < fieldNode["a"].length; ++j) {
                    var argNode = fieldNode["a"][j];
                    var arg = createArg(argNode.$["name"], argNode.$["type"], argNode.$["d"]);
                    arg.defaultValue = argNode.$["default"] ? argNode.$["default"] : null;
                    arg.modifiers = argNode.$["modifiers"] ? argNode.$["modifiers"] : null;
                    arg.modifiersV = U_1.U.parseModifier(arg.modifiers);
                    member.args.set(arg.name, arg);
                }
            }
            else {
                member.args = null;
            }
        }
    }
    static readInsightsG(node, g) {
        var funcList = node["insight"]["f"];
        for (var i = 0; i < funcList.length; ++i) {
            var funcNode = funcList[i];
            var isStatic = funcNode.$["modifiers"] && funcNode.$["modifiers"].indexOf(Modifier_1.ModifierStr.Static) >= 0;
            var mf = createField(funcNode.$["name"], null, FieldType_1.FieldType.Function, funcNode.$["type"], isStatic);
            mf.descInsight = funcNode.$["d"];
            mf.modifiers = funcNode.$["modifiers"] ? funcNode.$["modifiers"] : null;
            mf.modifiersV = U_1.U.parseModifier(mf.modifiers);
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
                    arg.modifiersV = U_1.U.parseModifier(arg.modifiers);
                    mf.args.set(arg.name, arg);
                }
            }
            else {
                mf.args = null;
            }
            g.set(mf.name, mf);
        }
    }
}
exports.FP = FP;
function createClass(name, description) {
    return {
        name: name,
        description: typeof description !== "undefined" ? description : null,
        fields: new Map()
    };
}
function createField(name, description, fieldType, returnType, isStatic) {
    return {
        name: name,
        descComp: description,
        fieldType: fieldType,
        rTypeComp: returnType,
        isStatic: isStatic
    };
}
function createArg(name, type, description) {
    return {
        name: name,
        type: type,
        description: description
    };
}
//# sourceMappingURL=FP.js.map