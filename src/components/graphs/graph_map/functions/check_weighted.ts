import { Edge } from "@xyflow/react";
import { Weight } from "../../../../shared/enumerations/enums";


// should return true if graph is weighted
export default function check_weighted(edges : Edge[]) : boolean {
    return edges.every((e : Edge) => e.label !== Weight.UNWEIGHTED);
}