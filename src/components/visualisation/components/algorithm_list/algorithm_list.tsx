import { algos } from "../../algorithms/algorithms_aggreg";
import { Algorithm } from "../../../../shared/types/graph_types";
import ListElement from "./element_list";
import { useState } from "react";

interface DropdownProps {
    setSelectedValue: (n: number) => void;
    setChosenFunction: React.Dispatch<React.SetStateAction<any>>;
    resetGraph: () => void;
};


export default function AlgorithmList({ setSelectedValue, setChosenFunction, resetGraph }: DropdownProps) {
    const [filterVal, setFilterVal] = useState("");

    const handleChange = (idx_chosen: number) => {
        document.getElementById("navbar")?.scrollIntoView({behavior:'smooth'});
        setSelectedValue(idx_chosen);
        const a: Algorithm = algos[idx_chosen];
        setChosenFunction(a);
        resetGraph();
    }

    const handleFilterChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setFilterVal(e.target.value);
    }

    return (
        <div className="flex flex-col items-center content-center pb-6">
            <div className="divider"></div>
            <div className="grid grid-cols-2 pb-4">
                <h1 className="text-2xl font-bold">Algorithms</h1>
                <input onChange={handleFilterChange} placeholder="filter" className="input border border-black"></input>
            </div>
            <div className="w-3/5 overflow-auto h-[400px]">
                <ul>
                    {algos.map((a: Algorithm, idx: number = 0) =>
                        a.name.toLocaleLowerCase().includes(filterVal) ? <ListElement elem={a} onClick={handleChange} idx={idx} /> : null
                    )}
                </ul>
            </div>
        </div>
    );
}