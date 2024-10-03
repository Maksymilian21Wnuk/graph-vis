import Button from "../../utility/button";
import { Edge } from "@xyflow/react";
import { Weight } from "../../../shared/enumerations/enums";
import { GraphButtonsProps } from "../../../shared/types/interactive_types";
import { NODE_MAX } from "../../../shared/constants";
import getRandomInt from "../../utility/functions/random_int";


export default function Buttons({ dispatch, setEdges, edges, setNodes }: GraphButtonsProps) {
    const random_weight = () => {
        setEdges(edges.map((e: Edge) => { return { ...e, label: String(getRandomInt(NODE_MAX)) } }));
        dispatch({ type: 'CHANGE_WEIGHTED', payload: true });
    };

    const no_weights = () => {
        setEdges(edges.map((e: Edge) => { return { ...e, label: Weight.UNWEIGHTED } }));
        dispatch({ type: 'CHANGE_WEIGHTED', payload: false });
    }

    const clear = () => {
        setEdges([]);
        setNodes([]);
    }

    return (
        <div className="flex flex-col mx-5 my-2 md:flex-row w-full justify-evenly">
            <Button onClick={() => dispatch({ type: "MODE_ADD" })} text={"Add"} />
            <Button onClick={() => dispatch({ type: "MODE_REMOVE" })} text={"Remove"} />
            <Button onClick={random_weight} text={"Random weights"} />
            <Button onClick={no_weights} text={"No weights"} />
            <Button onClick={clear} text={"Clear"}/>
        </div>
    );
}