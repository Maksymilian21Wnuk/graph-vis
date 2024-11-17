import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InputInterface } from "../input_interface";



export default function OneLineInput({ name, desc, bg }: InputInterface) {
    return (
        <div>
            <div className={`p-5 ${bg ? "bg-slate-200" : "bg-slate-100"} grid grid-cols-9`}>
                <label className="mr-5 col-span-2" >{`${name}: `}</label>
                <input className="input lg:text-xl col-span-6"></input>
                <div className="tooltip col-span-1" data-tip={desc}>
                    <button className="p-5 ml-5 bg-white rounded-3xl hover:bg-slate-100">
                        <FontAwesomeIcon icon={faQuestion} />
                    </button>
                </div>
            </div>
        </div>
    )
}