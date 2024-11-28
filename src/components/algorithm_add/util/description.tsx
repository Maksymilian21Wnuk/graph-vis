

interface DescriptionInterface {
    text: JSX.Element
}

export default function Description({text} : DescriptionInterface) {
    <div className="">
        {text}
    </div>
}