"use strict";
const fs = require("fs");
const xml2js = require("xml2js");
const Modifier_1 = require("./info/Modifier");
class U {
    static parseBool(s) {
        return s && s.toLowerCase() === "false";
    }
    static ensureContains(map, key, value) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
    static readFile(path) {
        if (fs.existsSync(path)) {
            return fs.readFileSync(path, "utf-8");
        }
        else {
            return null;
        }
    }
    static parseXml(xml) {
        var ready = false;
        var o;
        xml2js.parseString(xml, (_, v) => {
            o = v;
            ready = true;
        });
        while (!ready) {
        }
        return o;
    }
    static parseModifier(s) {
        if (!s) {
            return 0;
        }
        var r = 0;
        for (var k in Modifier_1.ModifierStr) {
            if (Modifier_1.ModifierStr.hasOwnProperty(k)) {
                if (s.indexOf(Modifier_1.ModifierStr[k]) >= 0) {
                    r |= Modifier_1.ModifierInt[k];
                }
            }
        }
        return r;
    }
}
exports.U = U;
//# sourceMappingURL=U.js.map