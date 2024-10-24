import { Node } from "@xyflow/react";

export type BinaryNode = Node & {
    parent? : BinaryNode;
    left? : BinaryNode;
    right? : BinaryNode;
    value : number;
}
