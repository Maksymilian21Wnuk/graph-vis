import { GraphName } from "../../../../shared/types/graph_map_types";
import DescNames from "../../../../shared/interfaces/desc_names.interface";
import { Algorithm } from "../../../../shared/types/visualisation_types";

interface DropdownProps {
    selectedValue : number;
    handleChange : (event : any) => void;
    obj : Algorithm[] | GraphName[] | DescNames[];
    text? : string;
}

/**
 * Component for making dropdown returning
 * index of selected option
 * @param param0 
 * @returns dropdown atom
 */
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