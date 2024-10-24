import { Algorithm } from "../../../../../shared/types/graph_types";


interface ListElementProps {
    elem: Algorithm;
    onClick: (event : any) => void;
    idx: number;
}

// on click sets to idx chosen value
export default function ListElement({ elem, onClick, idx }: ListElementProps) {
    return (
        <div>
            <li key={idx} onClick={() => onClick(idx)} className="grid grid-cols-3 gap-x-10 cursor-pointer hover:bg-gray-100 rounded-xl border-2 mb-2 bg-white">
                <div className="font-bold border-r-2 p-5">
                    {elem.name}
                </div>
                <div className="col-span-2 p-5">
                    {elem.description ? elem.description : "No description provided, provide it lorem ipsum"}
                </div>
            </li>
        </div>
    );
}