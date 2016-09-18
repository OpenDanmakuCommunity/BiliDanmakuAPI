/**
 * Created by MIC on 2016/3/31.
 */
import {ArgInfo} from "./ArgInfo";

export interface FieldInfo {
    fieldType: string;
    name: string;
    descComp: string;
    rTypeComp: string;
    descInsight?: string;
    rTypeInsight?: string;
    returnDesc?: string;
    modifiers?: string;
    modifiersV?: number;
    remarks?: string;
    isStatic?: boolean;
    args?: Map<string, ArgInfo>;
}
