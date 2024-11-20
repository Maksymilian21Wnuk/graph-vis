import { useState } from "react";
import { AggregationInterfaceNamed } from "../../../../../algorithms/algorithms_description/json_interfaces";
import DescriptionPopup from "./description_popup";


interface ElementsProps {
    onClick: (event: any) => void;
    algos: AggregationInterfaceNamed[];
    filterVal: string;
}

// on click sets to idx chosen value
export default function Elements({ onClick, algos, filterVal }: ElementsProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    const [chosen, setChosen] = useState<string>("bfs");
    const [title, setTitle] = useState<string>("bfs");
    const [showModal, setShowModal] = useState(false);

    const handleMouseEnter = (id: number) => {
        setHovered(id);
    }

    const onShowPopup = (chosen: string, title: string) => {
        setChosen(chosen);
        setShowModal(true);
        setTitle(title);
    }

    const onHide = () => {
        setShowModal(false);
    }

    const handleMouseLeave = () => {
        setHovered(null);
    }

    return (
        <ul>
            {showModal ? <DescriptionPopup title={title!} chosen={chosen!} onHide={onHide} /> : null}
            {algos.map((a: AggregationInterfaceNamed, idx: number = 0) => {
                if (a.name.toLocaleLowerCase().includes(filterVal)) {
                    return (
                        <li key={idx}
                            onClick={() => onClick(a.name)}
                            onMouseEnter={() => handleMouseEnter(idx)}
                            onMouseLeave={() => handleMouseLeave()}
                            className="grid grid-cols-9 gap-x-10 
                            cursor-pointer rounded-xl border-2 mb-2 
                            bg-white hover:bg-gray-100 h-24">

                            <div className="col-span-2 font-bold border-r-2 p-5">
                                {a.title}
                            </div>
                            <div className="col-span-5 p-5">
                                {a.description ? a.description : "No description provided, provide it lorem ipsum"}
                            </div>

                            <div className="col-span-2 py-4">
                                {hovered === idx ? (
                                    <button className="font-bold bg-slate-300 hover:bg-slate-400 p-5 rounded-md text-black" onClick={() => onShowPopup(a.name, a.title)}>
                                        Description
                                    </button>) : null}
                            </div>
                        </li>)
                }
            }
            )}
        </ul>);

}