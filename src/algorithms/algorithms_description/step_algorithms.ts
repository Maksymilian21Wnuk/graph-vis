

export interface StepInterface {
    steps: string[],
}

export const step_text: StepInterface[] = [
    //bfs
    { steps: ["Initialize queue Q", "Extract node from Q", "Add unvisited neighbours to Q", "Repeat from 2, if Q is not empty", "Q is empty", "Terminate"] },
    //dfs
    {
        steps: ["Add start node to Stack and mark it as visited",
            "Pop node from stack",
            "Add unvisited neighbours to stack",
            "Continue while stack is not empty",
            "Terminate"]
    },
    // connection check
    { steps: ["Initialize queue Q", "Extract node from Q", "Add unvisited neighbours to Q", "Repeat 2 step if Q is not empty", "Q is empty", "Check size of visited set and graph's size", "Terminate"] },
    // dijkstra
    {
        steps: ["Select start node",
            "Set distances to all nodes to ∞",
            "Check distances to neighbours",
            "If one of distances is shorter, update distances",
            "Pick shortest path unvisited neighbour and repeat from 3",
            "Every visited, terminate"]
    },
    // kruskal
    {
        steps: ["Sort edges in increasing order",
            "Pick smallest edge",
            "If edge creates cycle, repeat 2",
            "Sorted array is empty",
            "Mst found"]
    },
    // kahn
    {
        steps: ["Initialize indegree values for vertices",
            "Add to queue vertices with indegree == 0",
            "Extract from queue vertice and add to result",
            "Decrement from neighbours their value, if value is 0 add to queue",
            "Queue empty, terminate algorithm"]
    },
    {
        steps: [
            `Select start node and color it to blue`,
            `Extract node from queue`,
            `Visit adjacent nodes`,
            `Color adjacent nodes to a color different from current node`,
            `Terminate algorithm`
        ]
    },
    {
        steps: ["Initialize queue Q",
            "Extract node from Q",
            "Add unvisited neighbours to Q",
            "Update distances of neighbours using current vertex distance + neighbour's edge weight",
            "Q is empty",
            "Terminate"]
    },
]