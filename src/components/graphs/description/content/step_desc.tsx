import { useShallow } from "zustand/shallow";
import { AppState } from "../../../../shared/types/graph_map_types";
import useStore from "../../store/store";
import { step_text } from "../../visualisation/algorithms/algorithms_description/step_algorithms";

interface StepDescProps {
    selectedValue : number;
}

const selector = (state: AppState) => ({
    message : state.message,
    modifyMode : state.modifyMode,
});

export default function StepDesc({selectedValue} : StepDescProps) {
    const {message, modifyMode} = useStore(useShallow(selector));

    if (!step_text[selectedValue]) {
        return "you must add steps text";
    }
    return (
        <div className='animate-appear py-2'>
            <ol type='1' className='list-decimal list-inside'>
                {step_text[selectedValue].steps.map((step: string, key: number = 1) =>
                    <li className=
                    {message.step_idx === -1 ? 'pl-2' : (message.step_idx != key || modifyMode ? 'pl-2' : 'rounded-md m-1 pl-2 animate-redColorChange font-bold')}
                     key={`step-` + key++}>{step}</li>
                )}
            </ol>
        </div>
        )
}