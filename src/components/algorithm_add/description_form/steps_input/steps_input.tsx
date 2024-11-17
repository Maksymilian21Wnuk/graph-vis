import { faPlus, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";





export default function StepsInput() {
    const [stepsCount, setStepsCount] = useState<number>([]);

    const onAdd = () => {
        setStepsCount(stepsCount.length + 1);
    }

    return (
        <div>
            <div className="p-5 bg-slate-200 grid grid-cols-9">
            <label className="mr-5 col-span-2" >Steps: </label>
                <input className="input lg:text-xl col-span-5"></input>
                <div className="tooltip col-span-1" data-tip="Add next">
                    <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                <div className="tooltip col-span-1" data-tip="Step addition">
                    <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                        <FontAwesomeIcon icon={faQuestion} />
                    </button>
                </div>
            </div>
        </div>
    )
}