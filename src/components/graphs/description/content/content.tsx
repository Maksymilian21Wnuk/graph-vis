import TextDesc from "./text_desc";
import StepDesc from "./step_desc";

interface ContentProps {
    desc : number;
    selectedValue : string;
}

export default function Content({desc, selectedValue} : ContentProps) {
    desc = Number(desc);


    switch (desc as number) {
        case 0:
            return <StepDesc selectedValue={selectedValue} />
        case 1:
            return <TextDesc selectedValue={selectedValue} />
        default:
            return (
                <div>
                    {"No description, you should add it"}
                </div>)
    }

}