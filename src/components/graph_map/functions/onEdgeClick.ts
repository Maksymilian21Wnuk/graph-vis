import { Edge } from "@xyflow/react";





export default function onEdgeClick(_event : React.MouseEvent<Element, MouseEvent>, 
    edge : any, removeMode : boolean, setEdges : any, edges : Edge[]) : void {
    if (removeMode){
        setEdges(edges.filter(e => e.id !== edge.id))
    }
}