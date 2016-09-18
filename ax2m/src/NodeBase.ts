/**
 * Created by MIC on 2016/3/31.
 */

export interface NodeBase<V> {
    [key: string]: string|string[]|V|NodeBase<V>|NodeBase<V>[];
}
