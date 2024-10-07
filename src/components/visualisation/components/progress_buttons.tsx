

interface ProgressButtonsProps {
    modifyMode : boolean;
    next_step : () => void;
    start : () => void;
}


export default function ProgressButtons({modifyMode, next_step, start} : ProgressButtonsProps) {
    return (
        <div className="flex justify-center gap-4 p-2 m-5">
            {!modifyMode ?
                (
                    <div>
                        <button className="btn" onClick={next_step}>Next</button>
                    </div>)
                :
                <button className="btn" onClick={start}>Start </button>}
        </div>
    )
}