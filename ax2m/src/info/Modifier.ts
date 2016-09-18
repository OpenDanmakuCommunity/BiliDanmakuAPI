/**
 * Created by MIC on 2016/3/31.
 */

interface IndexedIterator<T> extends Iterator<T> {
    $index: number;
}

export abstract class ModifierStr {

    static get Static(): string {
        return "Static";
    }

    static get Params(): string {
        return "Params";
    }

    static get Hidden(): string {
        return "Hidden";
    }

    static [Symbol.iterator](): IndexedIterator<string> {
        return {
            $index: 0,
            next() {
                if (this.$index < ModifierStr._values.length) {
                    return {
                        value: ModifierStr._values[this.$index++],
                        done: false
                    };
                } else {
                    return {
                        value: null,
                        done: true
                    };
                }
            }
        };
    }

    private static _values: string[] = [ModifierStr.Static, ModifierStr.Params, ModifierStr.Hidden];

}

export abstract class ModifierInt {

    static get Static(): number {
        return 1;
    }

    static get Params(): number {
        return 2;
    }

    static get Hidden(): number {
        return 4;
    }

}
