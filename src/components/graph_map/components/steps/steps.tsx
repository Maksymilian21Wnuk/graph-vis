import { Message } from "../../../../shared/types/graph_types"
import { Additional } from "../../../../shared/types/graph_types";


interface AdditionalProps {
    additional : Additional[];
}


function AdditionalDisplay({additional} : AdditionalProps) {

    return (
        <div className="overflow-y-auto h-60">
            <ul>
                {additional.map((additional : Additional) => <li key={additional.id} className="border-2 m-1 px-3 py-1 w-fit border-black">{additional.id}   {additional.value === String(Infinity) ? "∞" : additional.value}</li>)}
            </ul>
        </div>
    )
}


export default function Steps({additional, additional_name, modifyMode, step_idx} : Message) {

    return additional_name && !modifyMode ? (
        <div className="mx-2 p-2">
            <div className="z">
                {additional_name ? additional_name : null}
            </div>
            <div className="py-6">
                {additional ? <AdditionalDisplay additional={additional}/> : null }
            </div>
        </div>
    ) : null
}