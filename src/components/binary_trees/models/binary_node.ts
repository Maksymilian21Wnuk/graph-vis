import { Node } from "@xyflow/react";

export type BinaryNode = Node & {
    parent : BinaryNode | undefined;
    left : BinaryNode | undefined;
    right : BinaryNode | undefined;
    value : number;
}
