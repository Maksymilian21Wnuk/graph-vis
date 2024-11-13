import { useShallow } from "zustand/shallow";
import { AppState } from "../../../../shared/types/graph_map_types";
import useStore from "../../store/store";
import json_getter from "../../store/json_getter";
import { JsonFileAction } from "../../../../shared/enumerations/enums";
import { StepInterface } from "../../../../algorithms/algorithms_description/json_interfaces";

interface StepDescProps {
    selectedValue : string;
}


const selector = (state: AppState) => ({
    message : state.message,
    modifyMode : state.modifyMode,
});

export default function StepDesc({selectedValue} : StepDescProps) {
    const {message, modifyMode} = useStore(useShallow(selector));

    const step_text = json_getter(JsonFileAction.Steps, selectedValue) as StepInterface;

    return (
        <div className='animate-appear py-2 flex flex-col items-center'>
            <ol type='1' className='list-decimal list-inside'>
                {step_text.steps.map((step: string, key: number = 1) =>
                    <li className=
                    {message.step_idx === -1 ? 'pl-2' : (message.step_idx != key || modifyMode ? 'pl-2' : 'rounded-md m-1 pl-2 animate-redColorChange font-bold')}
                     key={`step-` + key++}>{step}</li>
                )}
            </ol>
        </div>
        )
}