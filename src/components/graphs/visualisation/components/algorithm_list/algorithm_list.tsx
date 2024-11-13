import { Algorithm } from "../../../../../shared/types/visualisation_types";
import { useState } from "react";
import Elements from "./elements";
import json_getter from "../../../store/json_getter";
import { JsonFileAction } from "../../../../../shared/enumerations/enums";
import { AggregationInterface } from "../../../../../algorithms/algorithms_description/json_interfaces";

interface DropdownProps {
    setSelectedValue: (n: string) => void;
    setChosenFunction: React.Dispatch<React.SetStateAction<any>>;
    resetGraph: () => void;
};


export default function AlgorithmList({ setSelectedValue, setChosenFunction, resetGraph }: DropdownProps) {
    const [filterVal, setFilterVal] = useState("");

    const handleChange = (chosen : string) => {
        document.getElementById("navbar")?.scrollIntoView({ behavior: 'smooth' });
        setSelectedValue(chosen);
        const a: Algorithm = algos[idx_chosen];
        setChosenFunction(a);
        resetGraph();
    }

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterVal(e.target.value);
    }

    return (
        <div className="flex flex-col items-center content-center pb-6 bg-slate-50 border-2">
            <div className="grid grid-cols-2 p-4">
                <h1 className="text-2xl font-bold">Algorithms</h1>
                <input onChange={handleFilterChange} placeholder="filter" className="input border border-black"></input>
            </div>
            <div className="w-3/5 overflow-auto h-[400px]">
                <Elements onClick={handleChange} 
                algos={json_getter(JsonFileAction.Aggregation) as AggregationInterface[]} 
                filterVal={filterVal} />
            </div>
        </div>
    );
}