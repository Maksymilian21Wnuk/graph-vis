import { useState } from "react"
import Button from "../../../../utility/atoms/button";
import Input from "../../input";
import Slider from "../slider";
import randomizer from "./randomizer";



interface RandomSpawnerProps {
    selectedValue: number;
}

const RANDOM_GRAPH_NUM = 5;


export default function RandomSpawner({ selectedValue }: RandomSpawnerProps) {
    const [sliderValue, setSliderValue] = useState<string | number>(0.5);
    const [nodeCount, setNodeCount] = useState<string | number>(10);
    
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseFloat(event.target.value));
    }

    const submitSpawn = (_event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (typeof(sliderValue) === "number" && typeof(nodeCount) === "number"){
            randomizer(sliderValue, nodeCount);
            
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
                <Slider onChange={onChange} sliderValue={sliderValue}/>
                <Input id={"nodeInput"} top_left_text="Node Count" input_change={input_change} input_value={nodeCount} />
                <Button onClick={submitSpawn} text="Spawn"/>
            </>
        )
    }
    else {
        return null;
    }

}