import { XYPosition } from "@xyflow/react";
import { DIRECTION } from "../../../../shared/enumerations/enums";


export default function calculate_position(pos : XYPosition, direction : DIRECTION) : XYPosition {
    return direction === DIRECTION.RIGHT ? {x: pos.x + 100, y: pos.y + 100} : {x: pos.x - 50, y: pos.y + 100} ;
}