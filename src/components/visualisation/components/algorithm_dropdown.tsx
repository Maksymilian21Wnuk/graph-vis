import Dropdown from "../../utility/atoms/dropdown";
import { algos } from "../algorithms/algorithms_aggreg";


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
        <div className="flex justify-center py-5 pb-6">
            <Dropdown selectedValue={selectedValue} handleChange={handleChange} obj={algos} text="Choose algorithm..." />
        </div>
    );
}