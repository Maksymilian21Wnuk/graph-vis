import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { code_text } from '../../algorithms/algorithms_description/code_algorithms';
import { useState } from 'react';
import { description_text } from '../../algorithms/algorithms_description/description_algorithms';
import Dropdown from '../../../utility/atoms/dropdown';
import DescNames from '../../../../shared/interfaces/desc_names.interface';
import { step_text } from '../../algorithms/algorithms_description/step_algorithms';

interface DescriptionProps {
    algo_selected: number;
}


// to change?
function description_chooser(desc: number, selectedValue: number) {
    // bad
    desc = Number(desc);


    switch (desc as number) {
        case 0:
            if (!description_text[selectedValue]){
                return "you must description steps text";
            }
            return (
                <div className=''>
                    {description_text[selectedValue]}
                </div>
            )
        case 1:
            if (!step_text[selectedValue]){
                return "you must add steps text";
            }
            return (
                <div className='py-2'>
                    <ol type='1' className='list-decimal list-inside'>
                        {step_text[selectedValue].steps.map((step : string, key : number = 1) =>
                            <li className='pl-2' key={`step-` + key++}>{step}</li>
                        )}
                    </ol>
                </div>
            )
        case 2:
            if (!code_text[selectedValue]){
                return "you must add code text";
            }
            return (
                <SyntaxHighlighter language="python" style={docco} showLineNumbers wrapLines>
                    {code_text[selectedValue]}
                </SyntaxHighlighter>
            )
        default:
            return (
                <div>
                    {"No description, you should add it"}
                </div>)
    }

}

const desc_names: DescNames[] = [
    { name: "Description" },
    { name: "Step-by-step" },
    { name: "Code" }
]

export default function Description({ algo_selected }: DescriptionProps) {
    const [desc, setDesc] = useState(0);

    const onChange = (event: any) => {
        setDesc(event.target.value);
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <div className='flex-row'>
                <Dropdown selectedValue={desc} obj={desc_names} handleChange={onChange} />
            </div>
            <div>
                {description_chooser(desc, algo_selected)}
            </div>
        </div>
    )
}