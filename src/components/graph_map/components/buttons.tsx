import Button from "../../utility/button";
import { Edge } from "@xyflow/react";
import { Weight } from "../../../shared/enumerations/enums";
import { GraphButtonsProps } from "../../../shared/types/types";

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}


export default function Buttons({dispatch, setEdges, edges}: GraphButtonsProps) {
    return (
        <div className="flex flex-col mx-5 my-2">
                <Button onClick={(_e) => dispatch({type : "MOVE_MODE"})} text={"Move"}/>
                <Button onClick={(_e) => dispatch({type : "MODE_ADD"})} text={"Add"}/>
                <Button onClick={(_e) => dispatch({type : "MODE_REMOVE"})} text={"Remove"}/>
                <Button onClick={(_e) => setEdges(edges.map((e : Edge) => { return {...e, label : String(getRandomInt(20))} }))} text={"Random edging"}/>
                <Button onClick={(_e) => setEdges(edges.map((e : Edge) => { return {...e, label : Weight.UNWEIGHTED }}))} text={"No edging"}/>
        </div>    
    );
}