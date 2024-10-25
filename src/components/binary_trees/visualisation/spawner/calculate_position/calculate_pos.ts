import { XYPosition } from "@xyflow/react";
import { DIRECTION } from "../../../../../shared/enumerations/enums";
import { distances } from "./distances";

export default function calculate_position(pos : XYPosition, direction : DIRECTION, depth : number) : XYPosition {
    let scalar = distances[depth];
    if (!scalar){
        scalar = {x: 50, y: 50};
    }

    switch (direction){
        case (DIRECTION.RIGHT) : {
            return {x: pos.x + scalar.x, y: pos.y + scalar.y};
        }
        case (DIRECTION.LEFT) : {
            return {x: pos.x - scalar.x, y: pos.y + scalar.y};
        }
    }
}
// 55 66 44 47 42