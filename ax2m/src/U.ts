/**
 * Created by MIC on 2016/4/2.
 */

import * as fs from "fs";
import * as xml2js from "xml2js";
import {ModifierStr, ModifierInt} from "./info/Modifier";

export abstract class U {

    static parseBool(s:string):boolean {
        return s && s.toLowerCase() === "false";
    }

    static ensureContains<K,V>(map:Map<K,V>, key:K, value:V):void {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }

    static readFile(path:string):string {
        if (fs.existsSync(path)) {
            return fs.readFileSync(path, "utf-8");
        } else {
            return null;
        }
    }

    static parseXml(xml:string):any {
        var ready = false;
        var o:any;
        xml2js.parseString(xml, (_:any, v:any) => {
            o = v;
            ready = true;
        });
        while (!ready) {
        }
        return o;
    }

    static parseModifier(s:string):number {
        if (!s) {
            return 0;
        }
        var r = 0;
        for (var k in ModifierStr) {
            if (ModifierStr.hasOwnProperty(k)) {
                if (s.indexOf(ModifierStr[k]) >= 0) {
                    r |= ModifierInt[k];
                }
            }
        }
        return r;
    }

}
