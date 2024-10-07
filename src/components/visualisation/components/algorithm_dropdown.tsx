import { algos } from "../algorithms/algorithms_aggreg";


interface DropdownProps {
    setSelectedValue : React.Dispatch<React.SetStateAction<number>>;
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
        <div className="flex justify-center py-2">
            <select className="select select-bordered w-full max-w-xs" 
                    value={selectedValue} onChange={handleChange}>
                        <option>Pick algorithm...</option>
                {/* this is for using array index for not using .find() */}
                {algos.map((alg : Algorithm, i : number = 0) => <option key={alg.name} value={i++}>{alg.name}</option>)}
            </select>
        </div>
    );
}