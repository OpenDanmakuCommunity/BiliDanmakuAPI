/**
 * Created by MIC on 2016/3/31.
 */

import {NodeBase} from "./NodeBase";

export interface XmlNode extends NodeBase<XmlNode> {
    $?: NodeBase<XmlNode>;
}
