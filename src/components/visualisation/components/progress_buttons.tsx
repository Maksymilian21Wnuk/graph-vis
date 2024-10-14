import Button from "../../utility/atoms/button/button";

interface ProgressButtonsProps {
    modifyMode : boolean;
    next_step : () => void;
    start : () => void;
    setModifyMode : (mode : boolean) => void;
    resetGraph : () => void;
    stepCount : number;
}


const ANIMATE_TIME = 0.7;

export default function ProgressButtons({setModifyMode, modifyMode, next_step, start, resetGraph, stepCount} : ProgressButtonsProps) {
    
    const onReset = () => {
        setModifyMode(true);
        resetGraph();
    }

    const onAnimate = () => {
        for (let x = 0; x < stepCount; x++){
            setTimeout(() => next_step(), ANIMATE_TIME + (x * 700));
        }
    }
    
    return (
        <div className="flex justify-center">
            {!modifyMode ?
                (
                    <div className="grid grid-cols-2 pl-20">
                        <Button onClick={next_step} text="Next"/>
                        <Button onClick={onReset} text="Reset" />
                        <Button onClick={onAnimate} text="Animate" />
                    </div>
                )
                :
                <Button onClick={start} text="Start" />
                }
        </div>
    )
}