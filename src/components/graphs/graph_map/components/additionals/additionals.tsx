import { Message } from "../../../../../shared/types/visualisation_types"
import { Additional } from "../../../../../shared/types/visualisation_types";


interface AdditionalProps {
    additional: Additional[];
}


function AdditionalDisplay({ additional }: AdditionalProps) {

    return (
        <div className="h-full overflow-auto">
            <ul className="overflow-auto h-[200px] lg:h-[335px]">
                {additional.map((additional: Additional) => <li key={additional.id} className="animate-appear border-2 m-1 px-3 py-1 w-fit border-black">{additional.id}   {additional.value === String(Infinity) ? "∞" : additional.value}</li>)}
            </ul>
        </div>
    )
}


export default function Additionals({msg, additional, additional_name, modifyMode, additional_snd, additional_snd_name }: Message) {

    return (additional_name || msg) && !modifyMode ? (
        <div className="grid grid-cols-2 mx-2 p-2">
            {msg ? <div> {msg} </div> : null}
            <div>
                <div className="">
                    {additional_name ? additional_name : null}
                </div>
                <div className="py-6">
                    {additional ? <AdditionalDisplay additional={additional} /> : null}
                </div>
            </div>

            <div>
                <div className="">
                    {additional_snd_name ? additional_snd_name : null}
                </div>
                <div className="py-6">
                    {additional_snd ? <AdditionalDisplay additional={additional_snd} /> : null}
                </div>
            </div>
        </div>
    ) : null
}