import { useState } from 'react';
import Dropdown from '../utility/atoms/dropdown/dropdown';
import DescNames from '../../shared/interfaces/desc_names.interface';
import { AppState } from '../../shared/types/interactive_types';
import useStore from '../../store/store';
import { useShallow } from 'zustand/shallow';
import { NOT_SELECTED } from '../../shared/constants';
import Content from './content/content';


const selector = (state: AppState) => ({
    algo_selected: state.selectedValue,
});

const desc_names: DescNames[] = [
    { name: "Steps" },
    { name: "Description" },
    { name: "Code" }
]


export default function Description() {
    const [desc, setDesc] = useState(0);
    const { algo_selected } = useStore(useShallow(selector));

    const onChange = (event: any) => {
        setDesc(event.target.value);
    }

    return (
        <div className="animate-appear w-1/5">
            {algo_selected !== NOT_SELECTED ? (
                <div className="flex flex-col justify-center items-center">
                    <div className='flex-row'>
                        <Dropdown selectedValue={desc} obj={desc_names} handleChange={onChange} />
                    </div>
                    <div>
                        <Content desc={desc} selectedValue={algo_selected} />
                    </div>
                </div>) : null}
        </div>
    )
}