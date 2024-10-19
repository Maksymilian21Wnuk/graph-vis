import { Node } from "@xyflow/react";

/*
Function for finding
first free label of node
available, that is for nodes on map: 1,2, 4,5 should
return 3
*/
export function find_first_free_index(idx_arr: number[]): string {
    if (idx_arr.length == 0) {
        return "1";
    }
    else {
        const sorted_arr : number[] = idx_arr.sort((n1, n2) => n1 - n2);
        let first: number = 1;
        for (let idx of sorted_arr) {
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