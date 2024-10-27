import { description_text } from "../../visualisation/algorithms/algorithms_description/description_algorithms";
import 'katex/dist/katex.min.css';
import Latex from "react-latex-next";
interface TextDescProps {
    selectedValue : number;
}

export default function TextDesc({selectedValue} : TextDescProps) {
    const selectedText = description_text[selectedValue];

    if (!selectedText) {
        return "you must write description steps text";
    }
    return (
        <div className='animate-appear m-3 h-72'>
            <div className="font-bold py-2">
                Short description
            </div>
            <div>
            {selectedText.text}
            </div>
            <div>
                <div className="font-bold py-2">
                Complexity
                </div>
                <div>
                <Latex>
                    {`Time: $ ${selectedText.time} $`}
                </Latex>
                </div>
                <div>
                <Latex>
                    {`Space: $ ${selectedText.space} $`}
                </Latex>
                </div>
            </div>

        </div>)
}