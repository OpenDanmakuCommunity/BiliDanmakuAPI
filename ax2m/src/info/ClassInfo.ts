/**
 * Created by MIC on 2016/3/31.
 */
import {FieldInfo} from "./FieldInfo";

export interface ClassInfo {
    name?:string;
    description?:string;
    fields?:Map<string, FieldInfo>;
}
