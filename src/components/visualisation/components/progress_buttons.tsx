import Button from "../../utility/atoms/button";

interface ProgressButtonsProps {
    modifyMode : boolean;
    next_step : () => void;
    start : () => void;
}


export default function ProgressButtons({modifyMode, next_step, start} : ProgressButtonsProps) {
    return (
        <div className="flex justify-center">
            {!modifyMode ?
                (
                    <div>
                        <Button onClick={next_step} text="Next"/>
                    </div>)
                :
                <button className="btn" onClick={start}>Start </button>}
        </div>
    )
}