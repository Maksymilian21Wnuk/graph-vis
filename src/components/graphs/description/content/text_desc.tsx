import JsonGetter from '../../store/json_getter';
import { useMemo } from 'react';
interface TextDescProps {
    selectedValue : string;
}

export default function TextDesc({selectedValue} : TextDescProps) {
    const selectedText = useMemo(() => {
        return JsonGetter.getDescription(selectedValue);
    }, [selectedValue])

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
                    {`Time: ${selectedText.time}`}
                </div>
                <div>
                    {`Space: ${selectedText.space}`}
                </div>
            </div>

        </div>)
}