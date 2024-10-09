

export interface StepInterface {
    steps : string[],
}

export const step_text : StepInterface[] = [
    //bfs
    {steps : ["Initialize queue Q", "Extract node from Q", "Add unvisited neighbours to Q", "Repeat from 2, if Q is not empty", "Terminate"]},
    //dfs
    {steps : ["Select start node", "Move to the first unvisited node", "Terminate"]},
    // connection check
    {steps : ["Initialize counter c=0 and queue Q", "Add start node to Q", "Extract Q" , "Add unvisited to Q", "Increment counter by 1", "Repeat 2 step if Q is not empty", "Terminate"]},
    // dijkstra
    {steps : ["Select start node"]},
    // kruskal
    {steps: ["Sort edges in increasing order", "Pick smallest edge", "If edge creates cycle, repeat 2", "Sorted array is empty", "Terminate"]}
]