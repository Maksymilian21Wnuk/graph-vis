import { useRef, useState } from "react";
import Button from "../../../../utility/atoms/button/button";
import delay from "../../../../utility/functions/delay";
import Slider from "../../../../utility/atoms/slider/slider";

interface ProgressButtonsProps {
    modifyMode: boolean;
    next_step: () => void;
    prev_step: () => void;
    start: () => void;
    setModifyMode: (mode: boolean) => void;
    resetGraph: () => void;
    stepCount: number;
}


export default function ProgressButtons({ prev_step, setModifyMode, modifyMode, next_step, start, resetGraph, stepCount }: ProgressButtonsProps) {

    const [animating, setAnimating] = useState(false);
    const [sliderValue, setSliderValue] = useState<number | string>(500);

    const onReset = () => {
        setModifyMode(true);
        resetGraph();
    }

    // ??? this is bad
    const onAnimate = async () => {
        setAnimating(true);
        for (let i = 0; i < stepCount; i++) {
            if (btn_ref.current) {
                btn_ref.current.click();
                await delay(sliderValue as number);
            }
        }
        setAnimating(false);
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue(parseInt(event.target.value));
    }

    const btn_ref = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="flex justify-center pt-1 lg:pt-4 bg-white">
            {!modifyMode ?
                (
                    <div className="flex">
                        <div className="">

                        </div>
                        <div className="grid grid-cols-5 gap-2">
                            <Slider sliderValue={sliderValue} onChange={onChange}
                                step="10" min={100} max="2000" disabled={animating} />
                            <Button disabled={animating} onClick={prev_step} text="Prev" />
                            <button className="btn bg-lime-200 hover:bg-lime-300" onClick={next_step} ref={btn_ref}>Next</button>
                            <Button disabled={animating} onClick={onReset} text="Reset" />
                            <Button disabled={animating} onClick={onAnimate} text="Animate" />
                            {/*animating ? <Button onClick={onStop} text="Stop" /> : null*/}
                        </div>
                    </div>
                )
                :
                <Button onClick={start} text="Start" />
            }
        </div>
    )
}