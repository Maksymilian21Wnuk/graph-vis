import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { code_text } from '../../algorithms/algorithms_description/code_algorithms';
import Button from '../../../utility/button';
import { useState } from 'react';
import { description_text } from '../../algorithms/algorithms_description/description_algorithms';


interface DescriptionProps {
    selectedValue : number;
}

enum DescriptionEnum {
    DESCRIPTION,
    STEP_BY_STEP,
    CODE
}

// to change?
function description_chooser(desc : DescriptionEnum, selectedValue : number) {
    switch(desc){
        case DescriptionEnum.DESCRIPTION:
            return (
                <div className=''>
                    {description_text[selectedValue]}
                </div>
            )
        case DescriptionEnum.STEP_BY_STEP:
            return (
                <div>

                </div>
            )
        case DescriptionEnum.CODE:
            return(
                <SyntaxHighlighter language="python" style={docco} showLineNumbers>
                    {code_text[selectedValue]}
                </SyntaxHighlighter>
            )
        default:
            null
    }

}

const button_style = "border-black rounded-none"

export default function Description({selectedValue} : DescriptionProps) {
    const [desc, setDesc] = useState(DescriptionEnum.DESCRIPTION);

    const onClick = (val : DescriptionEnum) => {
        document.getElementById('down')?.scrollIntoView();
        setDesc(val);
    }

    return (
        <div className="flex flex-col justify-center items-center my-5">
            <div className='flex-row'>
                <Button style = {button_style} text={"Description"} onClick={() => onClick(DescriptionEnum.DESCRIPTION)}/>
                <Button style = {button_style} text={"Step-by-step"} onClick={() => onClick(DescriptionEnum.STEP_BY_STEP)}/>
                <Button style = {button_style} text={"Code"} onClick={() => onClick(DescriptionEnum.CODE)}/>
            </div>
            <div>
                {description_chooser(desc, selectedValue)}
            </div>
            <div id='down'>
            </div>
        </div>
    )
}