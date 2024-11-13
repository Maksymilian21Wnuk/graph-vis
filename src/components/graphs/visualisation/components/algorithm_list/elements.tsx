import { AggregationInterface } from "../../../../../algorithms/algorithms_description/json_interfaces";


interface ElementsProps {
    onClick: (event: any) => void;
    algos: AggregationInterface[];
    filterVal: string;
}

// on click sets to idx chosen value
export default function Elements({ onClick, algos, filterVal }: ElementsProps) {
    return (
        <ul>
            {algos.map((a: AggregationInterface, idx: number = 0) => {
                if (a.name.toLocaleLowerCase().includes(filterVal)) {
                    return (
                        <li key={idx} onClick={() => onClick(a.name)} className="grid grid-cols-3 gap-x-10 cursor-pointer rounded-xl border-2 mb-2 bg-white hover:bg-gray-100">
                            <div className="font-bold border-r-2 p-5">
                                {a.title}
                            </div>
                            <div className="col-span-2 p-5">
                                {a.description ? a.description : "No description provided, provide it lorem ipsum"}
                            </div>
                        </li>)
                }
            }
            )}
        </ul>);

}