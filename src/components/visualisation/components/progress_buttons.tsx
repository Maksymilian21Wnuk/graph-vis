import Button from "../../utility/atoms/button/button";

interface ProgressButtonsProps {
    modifyMode : boolean;
    next_step : () => void;
    start : () => void;
    setModifyMode : (mode : boolean) => void
}


export default function ProgressButtons({setModifyMode, modifyMode, next_step, start} : ProgressButtonsProps) {
    return (
        <div className="flex justify-center">
            {!modifyMode ?
                (
                    <div className="grid grid-cols-2 pl-20">
                        <Button onClick={next_step} text="Next"/>
                        <Button onClick={() => setModifyMode(true)} text="Reset" />
                    </div>
                )
                :
                <Button onClick={start} text="Start" />
                }
        </div>
    )
}