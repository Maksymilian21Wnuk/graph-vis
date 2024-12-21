import { GuardsInterface } from "../../../../../algorithms/algorithms_description/json_interfaces";
import Chip from "../../../../utility/atoms/chip/chip";



/**
 * Component rendering chips for 
 * algorithm with given guards
 * @param guards guards of given algorithm
 * @returns 
 */
export default function ChipsTypes(guards: GuardsInterface) {

    return (
        <div className="">
            {guards.require_directed || !(guards.require_directed || guards.require_non_directed) ?
                <Chip text="Directed" /> : null}
            {guards.require_non_directed && !guards.require_tree || !(guards.require_directed || guards.require_non_directed) ?
                <Chip text="Undirected" /> : null}
            {guards.require_tree ?
                <Chip text="Tree" /> : null}
            {guards.require_weights ?
                <Chip text="Weighted" /> : null}
        </div>
    )
}