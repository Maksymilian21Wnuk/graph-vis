import Dropdown from "../../utility/atoms/dropdown/dropdown";
import { algos } from "../algorithms/algorithms_aggreg";
import { Algorithm } from "../../../shared/types/graph_types";

interface DropdownProps {
    setSelectedValue : (n : number) => void;
    setChosenFunction : React.Dispatch<React.SetStateAction<any>>;
    selectedValue : number;
    resetGraph : () => void;
};


export default function AlgorithmDropdown({setSelectedValue, setChosenFunction, selectedValue, resetGraph} : DropdownProps) {
    const handleChange = (event : any) => {
        setSelectedValue(event.target.value);
        const a : Algorithm = algos[event.target.value];
        setChosenFunction(a);
        resetGraph();
    }    

    return (
        <div className="flex flex-col items-center content-center py-5 pb-6">
            <h1 className="text-2xl font-bold">Algorithms</h1>
            <ul>
                {algos.map((a : Algorithm) => 
                    <li className="">{a.name} </li>
                )}
            </ul>
        </div>
    );
}