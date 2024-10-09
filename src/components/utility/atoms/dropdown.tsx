import { GraphName } from "../../../shared/types/interactive_types";
import { Algorithm } from "../../../shared/types/graph_types";
import DescNames from "../../../shared/interfaces/desc_names.interface";

interface DropdownProps {
    selectedValue : number;
    handleChange : (event : any) => void;
    obj : Algorithm[] | GraphName[] | DescNames[];
    text? : string;
}

// atom component for making 
// responsive dropdown interface
// onchange changes value
// accepts object of property name which is displayed in field
// optional text is for initial text
export default function Dropdown({selectedValue, handleChange, obj, text} : DropdownProps) {
    return (
        <select className="select select-bordered w-full max-w-xs"
            value={selectedValue} onChange={handleChange}>
            {text ? <option>{text}</option> : null}
            {/* this is for using array index for not using .find() */}
            {obj.map((o: Algorithm | GraphName | DescNames, i: number = 0) => <option key={o.name} value={i++}>{o.name}</option>)}
        </select>
    )
}