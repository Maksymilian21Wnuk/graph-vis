import { useState } from "react"
import Button from "../../../../../utility/atoms/button/button";
import Input from "../../input";
import Slider from "../../../../../utility/atoms/slider/slider";
import randomizer from "./randomizer";
import { AppState } from "../../../../../../shared/types/graph_map_types";
import useStore from "../../../../store/store";
import { useShallow } from "zustand/shallow";
import { useReactFlow } from "@xyflow/react";



interface RandomSpawnerProps {
    selectedValue: number;
}

const RANDOM_GRAPH_NUM = 5;
const MAX_LIMIT = 20;

const selector = (state: AppState) => ({
    setNodes: state.setNodes,
    setEdges: state.setEdges,
});


export default function RandomSpawner({ selectedValue }: RandomSpawnerProps) {
    const {setNodes, setEdges} = useStore(useShallow(selector));
    const [sliderValue, setSliderValue] = useState<string | number>(0.5);
    const [nodeCount, setNodeCount] = useState<string | number>(10);
    const reactFlow = useReactFlow();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseFloat(event.target.value));
    }

    const submitSpawn = (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (typeof(sliderValue) === "number" && typeof(nodeCount) === "number" && nodeCount < MAX_LIMIT){
            const {edges, nodes} = randomizer(sliderValue, nodeCount);
            setNodes(nodes);
            setEdges(edges);
            setTimeout(() => reactFlow.fitView());
        }
        else if (nodeCount as number >= MAX_LIMIT) {
            alert("Too many nodes");
        }
        else{
            alert("Error");
        }
    }

    const input_change = (event: React.ChangeEvent<HTMLInputElement>) => {
        const count: string = event.target.value;
        if (count === "") {
            setNodeCount("");
        }
        else {
            const parsed: number = parseInt(count);
            if (parsed < 0) {
                setNodeCount(0);
            }
            else {
                setNodeCount(parsed);
            }
        }
    }

    // if user selected random option, give him form for 
    // generating random graph
    if (selectedValue == RANDOM_GRAPH_NUM) {
        return (
            <>
                Edge probability:
                <Slider max="1" min={0} step="0.01" onChange={onChange} sliderValue={sliderValue}/>
                <Input id={"nodeInput"} top_left_text="Node Count" input_change={input_change} input_value={nodeCount} />
                <Button onClick={submitSpawn} text="Spawn"/>
            </>
        )
    }
    else {
        return null;
    }

}