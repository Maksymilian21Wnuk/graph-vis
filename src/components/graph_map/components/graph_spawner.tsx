import { useEffect, useState } from "react";
import { GraphName } from "../../../shared/types/interactive_types";
import { mockNames } from "./mock_data/mock_names";



export default function GraphSpawner() {
    const [names, setNames] = useState<GraphName[]>();

    useEffect(() => {
        setNames(mockNames);
    })
    
    return (
        <details className="dropdown">
            <summary className="btn m-1">Spawn graph</summary>
            <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                {names?.map((name: GraphName) => (<li key={name.id} className="menu-title">{name.name}</li>))}
            </ul>
        </details>

        
    );
}