import { useState } from "react";
import { GraphName } from "../../../shared/types/interactive_types";
import { mockNames } from "./mock_data/mock_names";
import { Value } from "../../../shared/enumerations/enums";


export default function GraphSpawner() {

    const [selectedValue, setSelectedValue] = useState(Value.NOT_SELECTED);

    const onChange = (event: any) => {
        setSelectedValue(event.target.value);
    }

    return (
        <div className="flex justify-center">
            <select className="select select-bordered w-full max-w-xs"
                value={selectedValue} onChange={onChange}>
                <option>Spawn graph TODO</option>
                {mockNames.map((name: GraphName, i: number = 0) => (<option key={name.name} value={i++}>{name.name}</option>))}
            </select>
        </div>
    );
}