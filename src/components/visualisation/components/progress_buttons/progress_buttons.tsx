import { useRef, useState } from "react";
import Button from "../../../utility/atoms/button/button";

interface ProgressButtonsProps {
    modifyMode: boolean;
    next_step: () => void;
    start: () => void;
    setModifyMode: (mode: boolean) => void;
    resetGraph: () => void;
    stepCount: number;
}


const ANIMATE_TIME = 600;

export default function ProgressButtons({ setModifyMode, modifyMode, next_step, start, resetGraph, stepCount }: ProgressButtonsProps) {

    const [animating, setAnimating] = useState(false);

    const onReset = () => {
        setModifyMode(true);
        resetGraph();
    }

    function delay(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // ??? this is bad
    const onAnimate = async () => {
        setAnimating(true);
        for (let i = 0; i <= stepCount; i++) {
            if (btn_ref.current) {
                btn_ref.current.click();
                await delay(ANIMATE_TIME);
            }
        }
        setAnimating(false);
    }


    const btn_ref = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="flex justify-center pt-4 bg-white">
            {!modifyMode ?
                (
                    <div className="grid grid-cols-3 pl-20">
                        <button className="btn" onClick={next_step} ref={btn_ref}>Next</button>
                        <Button disabled={animating} onClick={onReset} text="Reset" />
                        <Button disabled={animating} onClick={onAnimate} text="Animate" />
                        {/*animating ? <Button onClick={onStop} text="Stop" /> : null*/}
                    </div>
                )
                :
                <Button onClick={start} text="Start" />
            }
        </div>
    )
}