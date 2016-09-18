/**
 * Created by MIC on 2016/3/31.
 */

import {FP} from "./gen/FP";
import {ClassInfo} from "./info/ClassInfo";
import {FieldInfo} from "./info/FieldInfo";
import {GP} from "./gen/GP";
import {U} from "./U";

/*
 Args: <node-exec> <script> [<arg1>, [<arg2>, [...]]
 */

main(process.argv.slice(1));
process.exit();

// Args[0] = <script>
function main(args: string[]): void {
    var classes = readClassesXml();
    var funcs = readGlobalFuncXml();
    GP.filter(classes, funcs);
    // for (var [k, v] of classes) {
    //     console.log(v);
    // }
    GP.gen(classes, funcs, "../../docs");
}

function readClassesXml(): Map<string, ClassInfo> {
    var xml: string;
    var classes = new Map();
    xml = U.readFile("data/comp-classes.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.read1(obj, classes);
    }
    xml = U.readFile("data/comp-funcs_props.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.read2(obj, classes);
    }
    xml = U.readFile("data/comp-funcs_props-js.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.read2(obj, classes);
    }
    xml = U.readFile("data/comp-objfields.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.read2(obj, classes);
    }
    xml = U.readFile("data/insights.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.readInsights(obj, classes);
    }

    return classes;
}

function readGlobalFuncXml(): Map<string, FieldInfo> {
    var xml: string;
    var funcs = new Map();
    xml = U.readFile("data/insights-js.xml");
    if (xml) {
        var obj = U.parseXml(xml);
        FP.readInsightsG(obj, funcs);
    }
    return funcs;
}
