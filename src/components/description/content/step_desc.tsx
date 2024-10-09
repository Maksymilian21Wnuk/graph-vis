import { useShallow } from "zustand/shallow";
import { AppState } from "../../../shared/types/interactive_types";
import useStore from "../../../store/store";
import { step_text } from "../../visualisation/algorithms/algorithms_description/step_algorithms";


interface StepDescProps {
    selectedValue : number;
}

const selector = (state: AppState) => ({
    message : state.message,
});

export default function StepDesc({selectedValue} : StepDescProps) {
    const step_idx = useStore(useShallow(selector)).message.step_idx;

    if (!step_text[selectedValue]) {
        return "you must add steps text";
    }
    return (
        <div className='py-2'>
            <ol type='1' className='list-decimal list-inside'>
                {step_text[selectedValue].steps.map((step: string, key: number = 1) =>
                    <li className=
                    {step_idx === -1 ? 'pl-2' : (step_idx != key ? 'pl-2' : 'pl-2 bg-red-300 font-bold')}
                     key={`step-` + key++}>{step}</li>
                )}
            </ol>
        </div>
        )
}