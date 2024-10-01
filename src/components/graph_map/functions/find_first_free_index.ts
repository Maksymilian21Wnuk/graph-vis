import { Node } from "@xyflow/react";



export function find_first_free_index(idx_arr: number[]): string {
    if (idx_arr.length == 0) {
        return "1";
    }
    else {
        idx_arr.sort();
        let first: number = 1;
        for (let idx of idx_arr) {
            if (idx == first) {
                first += 1;
            }
            else if (idx > first) {
                return String(first);
            }
        }
        return String(first);
    }
}

export default function find_first_free(nodes: Node[]): string {
    return find_first_free_index(nodes.map((n: Node) => parseInt(n.id)));
}