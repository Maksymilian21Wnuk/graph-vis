
// given nodes position them on map
// so they do not intersect

import { XYPosition } from "@xyflow/react";


const DISTANCE = 60;

export default function positioning(n : number) : XYPosition[] {
    let positions : XYPosition[] = [];
    let selected_positions : XYPosition[] = [];

    // initialize with possible values
    for (let x = 0; x <= DISTANCE * n; x += DISTANCE){
        for (let y = 0; y <= DISTANCE * n; y += DISTANCE){
            positions.push({x:x, y:y});
        }
    }

    for (let i = 0; i < n; i++){
        const randomPos = Math.floor(Math.random() * positions.length);
        selected_positions.push(positions[randomPos]);
        positions.splice(randomPos, 1);
    }

    return selected_positions;
} 