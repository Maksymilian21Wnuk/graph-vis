import { useShallow } from "zustand/shallow";
import { AppState } from "../../../../shared/types/graph_map_types";
import useStore from "../../store/store";
import JsonGetter from "../../store/json_getter";
import { useMemo } from "react";

interface StepDescProps {
    selectedValue : string;
}


const selector = (state: AppState) => ({
    message : state.message,
    modifyMode : state.modifyMode,
});

export default function StepDesc({selectedValue} : StepDescProps) {
    const {message, modifyMode} = useStore(useShallow(selector));

    const step_text = useMemo(() => {
        return JsonGetter.getSteps(selectedValue);
    }, [selectedValue])


    if (!step_text) {
        console.log(`Error when reading ${selectedValue}, 
            make sure it exists or name fits to algorithm's file name.` )
    }

    return (
        <div className='animate-appear py-2 flex flex-col items-center h-full overflow-auto'>
            <ol type='1' className='list-decimal list-inside text-xs lg:text-base overflow-auto h-[225px] lg:h-[360px]'>
                {step_text.map((step: string, key: number = 1) =>
                    <li className=
                    {message.step_idx === -1 ? 'pl-2' : (message.step_idx != key || modifyMode ? 'pl-2' : 'rounded-md pl-2 animate-redColorChange font-bold')}
                     key={`step-` + key++}>{step}</li>
                )}
            </ol>
        </div>
        )
}