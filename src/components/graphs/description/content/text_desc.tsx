import { description_text } from "../../visualisation/algorithms/algorithms_description/description_algorithms";

interface TextDescProps {
    selectedValue : number;
}

export default function TextDesc({selectedValue} : TextDescProps) {
    if (!description_text[selectedValue]) {
        return "you must write description steps text";
    }
    return (
        <div className='animate-appear m-3'>
            {description_text[selectedValue]}
        </div>)
}