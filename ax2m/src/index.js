"use strict";
const FP_1 = require("./gen/FP");
const GP_1 = require("./gen/GP");
const U_1 = require("./U");
main(process.argv.slice(1));
process.exit();
function main(args) {
    var classes = readClassesXml();
    var funcs = readGlobalFuncXml();
    GP_1.GP.filter(classes, funcs);
    GP_1.GP.gen(classes, funcs, "../../docs");
}
function readClassesXml() {
    var xml;
    var classes = new Map();
    xml = U_1.U.readFile("data/comp-classes.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.read1(obj, classes);
    }
    xml = U_1.U.readFile("data/comp-funcs_props.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.read2(obj, classes);
    }
    xml = U_1.U.readFile("data/comp-funcs_props-js.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.read2(obj, classes);
    }
    xml = U_1.U.readFile("data/comp-objfields.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.read2(obj, classes);
    }
    xml = U_1.U.readFile("data/insights.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.readInsights(obj, classes);
    }
    return classes;
}
function readGlobalFuncXml() {
    var xml;
    var funcs = new Map();
    xml = U_1.U.readFile("data/insights-js.xml");
    if (xml) {
        var obj = U_1.U.parseXml(xml);
        FP_1.FP.readInsightsG(obj, funcs);
    }
    return funcs;
}
//# sourceMappingURL=index.js.map