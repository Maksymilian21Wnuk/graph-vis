



interface ChipInterface {
    text: string;
}

export default function Chip({text} : ChipInterface) {
    return (
        <div className="rounded-md py-1 px-3 border border-transparent text-black text-sm bg-lime-300 shadow-sm inline-block ">
            {text}
        </div>
    )
}