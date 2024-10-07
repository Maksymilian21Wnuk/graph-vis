import { DisjointSet } from "disjoint-set-ds/dist";
import { Additional } from "../../../../shared/types/graph_types";

// TODO: hide implementation of parse_additional,
// so that user can parse using method on Graph

interface Edge {
    source: string;
    dest : string;
    value : string;
}

type AdditionalType = Map<string, number> | Set<string> | DisjointSet<string> | Edge[];


function isEdge(object : any): object is Edge {
    return 'source' in object;
}

// function for parsing additional information of type Map<string, number> or
// set<number> for the case of visited unvisited data
export default function parse_additional(additional: AdditionalType) : Additional[] {
    let res: Additional[] = [];
    if (additional instanceof Map) {
        additional.forEach((value: number, key: string) => {
            res.push({ id: key, value: String(value) });
        })
        return res;
    }
    else if (additional instanceof Set) {
        additional.forEach((value: string) => {
            res.push({id : value, value : ""})
        })
        return res;
    }


    else {
        return res;
    }
}