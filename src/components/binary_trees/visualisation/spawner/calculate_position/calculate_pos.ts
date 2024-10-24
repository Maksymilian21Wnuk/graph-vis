import { XYPosition } from "@xyflow/react";
import { DIRECTION } from "../../../../../shared/enumerations/enums";

export default function calculate_position(pos : XYPosition, direction : DIRECTION, depth : number) : XYPosition {

    switch (direction){
        case (DIRECTION.RIGHT) : {
            return {x: pos.x + 50, y: pos.y + 50};
        }
        case (DIRECTION.LEFT) : {
            return {x: pos.x - 50, y: pos.y + 50};
        }
    }
}