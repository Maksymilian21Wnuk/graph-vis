import { GuardsInterface } from "../../../../../algorithms/algorithms_description/json_interfaces";
import Chip from "../../../../utility/atoms/chip/chip";




export default function ChipsTypes(guards: GuardsInterface) {

    return (
        <div>
            <div className="p-0.5">
                {guards.require_directed ? <Chip text="Directed" /> : null}
            </div>
            <div className="p-0.5">
                {guards.require_non_directed && !guards.require_tree ? <Chip text="Undirected" /> : null}
            </div>
            <div className="p-0.5">
                {guards.require_tree ? <Chip text="Tree" /> : null}
            </div>
            <div className="p-0.5">
                {guards.require_weights ? <Chip text="Weighted" /> : null}
            </div>
            <div className="p-0.5">
                {!guards.require_directed && !guards.require_non_directed ? <Chip text="Both" /> : null}
            </div>
        </div>
    )
}