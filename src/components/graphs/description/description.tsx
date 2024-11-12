import { useState } from 'react';
import Dropdown from '../../utility/atoms/dropdown/dropdown';
import DescNames from '../../../shared/interfaces/desc_names.interface';
import { AppState } from '../../../shared/types/graph_map_types';
import useStore from '../store/store';
import { useShallow } from 'zustand/shallow';
import { NOT_SELECTED } from '../../../shared/constants';
import Content from './content/content';
import Button from '../../utility/atoms/button/button';
import CodeDesc from './content/code_desc';


const selector = (state: AppState) => ({
    algo_selected: state.selectedValue,
});

const desc_names_dev: DescNames[] = [
    { name: "Steps" },
    { name: "Description" }
]

const desc_names: DescNames[] = [
    { name: "Steps" },
    { name: "Description" },
]


export default function Description() {
    const [desc, setDesc] = useState(0);
    const { algo_selected } = useStore(useShallow(selector));
    const [showCode, setShowCode] = useState(false);

    const onChange = (event: any) => {
        setDesc(event.target.value);
    }

    return (
        <>
            <div className="animate-appear w-1/5">
                {algo_selected !== NOT_SELECTED ? (
                    <div className="flex flex-col justify-center items-center">
                        <div className='flex-row'>
                            <Dropdown selectedValue={desc} obj={import.meta.env.DEV ? desc_names_dev : desc_names} handleChange={onChange} />
                        </div>
                        <div className='flex flex-col items-center'>
                            <Button onClick={() => setShowCode(true)} text="See the code" style="" />
                            <Content desc={desc} selectedValue={algo_selected} />
                            {showCode ?
                                <CodeDesc selectedValue={algo_selected} hideCodeDesc={() => setShowCode(false)} />
                                : null}
                        </div>
                    </div>) : null}
            </div>
        </>
    )
}