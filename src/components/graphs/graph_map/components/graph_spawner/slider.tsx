

interface SliderProps {
    sliderValue : string | number;
    onChange : (event: React.ChangeEvent<HTMLInputElement>) => void;
}


export default function Slider({sliderValue, onChange} : SliderProps) {
    return (
        <div>
            <input type="range" step={"0.01"} min={0} max="1" value={sliderValue} className="range" onChange={onChange} />
            <output>{sliderValue}</output>
        </div>
    )
}