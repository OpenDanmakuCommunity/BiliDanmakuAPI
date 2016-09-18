"use strict";
class ModifierStr {
    static get Static() {
        return "Static";
    }
    static get Params() {
        return "Params";
    }
    static get Hidden() {
        return "Hidden";
    }
    static [Symbol.iterator]() {
        return {
            $index: 0,
            next() {
                if (this.$index < ModifierStr._values.length) {
                    return {
                        value: ModifierStr._values[this.$index++],
                        done: false
                    };
                }
                else {
                    return {
                        value: null,
                        done: true
                    };
                }
            }
        };
    }
}
ModifierStr._values = [ModifierStr.Static, ModifierStr.Params, ModifierStr.Hidden];
exports.ModifierStr = ModifierStr;
class ModifierInt {
    static get Static() {
        return 1;
    }
    static get Params() {
        return 2;
    }
    static get Hidden() {
        return 4;
    }
}
exports.ModifierInt = ModifierInt;
//# sourceMappingURL=Modifier.js.map