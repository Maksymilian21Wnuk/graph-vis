import { useMemo, useState } from "react";
import Elements from "./elements";
import JsonGetter from "../../../store/json_getter";

interface DropdownProps {
    setSelectedValue: (n: string) => void;
    setChosenFunction: React.Dispatch<React.SetStateAction<any>>;
    resetGraph: () => void;
};


export default function AlgorithmList({ setSelectedValue, setChosenFunction, resetGraph }: DropdownProps) {
    const [filterVal, setFilterVal] = useState("");

    const algorithm_list = useMemo(() => {
        return JsonGetter.getAggregationFull();
    }, [])

    const handleChange = (chosen : string) => {
        document.getElementById("navbar")?.scrollIntoView({ behavior: 'smooth' });
        setSelectedValue(chosen);
        setChosenFunction(JsonGetter.getAggregation(chosen));
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
                algos={algorithm_list} 
                filterVal={filterVal} />
            </div>
        </div>
    );
}