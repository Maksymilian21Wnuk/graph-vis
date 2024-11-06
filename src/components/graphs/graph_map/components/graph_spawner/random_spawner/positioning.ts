
// given nodes position them on map
// so they do not intersect

import { XYPosition } from "@xyflow/react";


const START_RADIUS = 50;

export default function positioning(n : number) : XYPosition[] {
    let positions : XYPosition[] = [];
    const RADIUS = START_RADIUS + n * 10;
    const theta = 2 * Math.PI / n;

    for (let i = 0; i < n; i++) {
        const angle = i * theta;
        const x = RADIUS * Math.cos(angle); 
        const y = RADIUS * Math.sin(angle);
        positions.push({x:x, y:y})
    }

    return positions;
} 