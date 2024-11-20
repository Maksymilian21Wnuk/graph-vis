import { useState } from "react";
import { AggregationInterfaceNamed } from "../../../../../algorithms/algorithms_description/json_interfaces";
import DescriptionPopup from "./description_popup";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ElementsProps {
    onClick: (event: any) => void;
    algos: AggregationInterfaceNamed[];
    filterVal: string;
}

// on click sets to idx chosen value
export default function Elements({ onClick, algos, filterVal }: ElementsProps) {
    const [chosen, setChosen] = useState<string>("bfs");
    const [title, setTitle] = useState<string>("bfs");
    const [showModal, setShowModal] = useState(false);


    const onShowPopup = (chosen: string, title: string) => {
        setChosen(chosen);
        setShowModal(true);
        setTitle(title);
    }

    const onHide = () => {
        setShowModal(false);
    }

    return (
        <ul>
            {showModal ? <DescriptionPopup title={title!} chosen={chosen!} onHide={onHide} /> : null}
            {algos.map((a: AggregationInterfaceNamed, idx: number = 0) => {
                if (a.title.toLocaleLowerCase().includes(filterVal)) {
                    return (
                        <li key={idx}
                            onClick={() => onClick(a.name)}
                            className="grid grid-cols-9 gap-x-10 
                            cursor-pointer rounded-xl border-2 mb-2 
                            bg-white hover:bg-gray-100 h-24">

                            <div className="col-span-2 font-bold border-r-2 p-5">
                                {a.title}
                            </div>
                            <div className="col-span-6 p-5">
                                {a.description ? a.description : "No description provided, provide it lorem ipsum"}
                            </div>
                            <div className="col-span-1 py-4">
                                <button className="font-bold bg-slate-200 hover:bg-slate-300 p-5 px-6 rounded-full text-black" onClick={() => onShowPopup(a.name, a.title)}>
                                    <FontAwesomeIcon icon={faInfo} />
                                </button>
                            </div>
                        </li>)
                }
            }
            )}
        </ul>);

}