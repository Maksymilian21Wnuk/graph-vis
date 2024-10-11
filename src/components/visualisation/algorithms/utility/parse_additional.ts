import { DisjointSet } from "disjoint-set-ds/dist";
import { Additional } from "../../../../shared/types/graph_types";

// TODO: hide implementation of parse_additional,
// so that user can parse using method on Graph

type Edge = {
    source: string;
    dest: string;
    value: number;
}

type Queue = string[];
type Stack = string[];

type AdditionalType = Map<string, number> | Set<string> | DisjointSet<string> | Queue | Stack | Array<Edge>;


// function for parsing additional information of type Map<string, number> or
// set<number> for the case of visited unvisited data
export default function parse_additional(additional: AdditionalType): Additional[] {
    // handle map for idk distances or edges
    let res: Additional[] = [];
    if (additional instanceof Map) {
        additional.forEach((value: number, key: string) => {
            res.push({ id: key, value: String(value) });
        })
    }

    // handle set, that is visited
    else if (additional instanceof Set) {
        additional.forEach((value: string) => {
            res.push({ id: value, value: "" });
        })
    }
    // handle queue and stack
    else if (Array.isArray(additional) && additional.every(a => typeof a === 'string')) {
        additional.forEach((value: any) => {
            res.push({ id: value, value: "" });
        })
    }

    else if(Array.isArray(additional)){
        additional.forEach((edge: any) => {
            res.push({ id: `${edge.source}e${edge.dest}`, value: edge.value });
        })
    }
    

    return res;
}