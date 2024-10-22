import { Additional, AdditionalType, PlainEdge } from "../../../../shared/types/graph_types";
import { Queue } from "queue-typescript";
import { DisjointSetCustom } from "../../../../shared/models/disjoint_set_custom/disjoint_set";

// TODO: hide implementation of parse_additional,
// so that user can parse using method on Graph


// function for parsing additional information of type Map<string, number> or
// set<number> for the case of visited unvisited data
export default function parse_additional(additional: AdditionalType): Additional[] {
    // handle map for idk distances or edges
    let res: Additional[] = [];

    if (!additional){
        return res;
    }

    else if (additional instanceof Map) {
        additional = new Map([...additional].sort((a, b) => a[1] - b[1]));
        additional.forEach((value: number, key: string) => {
            res.push({ id: key, value: String(value) });
        })
    }

    else if (additional instanceof Queue) {
        additional.toArray().forEach((element: string) => {
            res.push({ id: element, value: "" })
        });

    }

    else if (additional instanceof DisjointSetCustom) {
        additional.get_sets().forEach((value : string[], key : string) => {
            res.push({id: key + `)`, value: value.join(" ")});
        }
    )
    }

    // handle set, that is visited
    else if (additional instanceof Set) {
        additional.forEach((value: string) => {
            res.push({ id: value, value: "" });
        })
    }
    // handle stack
    else if (Array.isArray(additional) && additional.every(a => typeof a === 'string')) {
        additional.forEach((value: string) => {
            res.push({ id: value, value: "" });
        })
    }

    // handle case of edge type
    else if (Array.isArray(additional)) {
        additional.forEach((edge: PlainEdge) => {
            res.push({ id: `${edge.source}e${edge.dest}`, value: String(edge.value) });
        })
    }


    return res;
}