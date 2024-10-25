import { Algorithm } from "../../../../../shared/types/visualisation_types";


interface ElementsProps {
    onClick: (event: any) => void;
    algos: Algorithm[];
    filterVal: string;
}

// on click sets to idx chosen value
export default function Elements({ onClick, algos, filterVal }: ElementsProps) {
    return (
        <ul>
            {algos.map((a: Algorithm, idx: number = 0) => {
                if (a.name.toLocaleLowerCase().includes(filterVal)) {
                    return (
                        <li key={idx} onClick={() => onClick(idx)} className="grid grid-cols-3 gap-x-10 cursor-pointer hover:bg-gray-100 rounded-xl border-2 mb-2 bg-white">
                            <div className="font-bold border-r-2 p-5">
                                {a.name}
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