
interface DescriptionTextInterface {
    text: string;
    time: string;
    space: string;
}


export const description_text: DescriptionTextInterface[] = [
    {
        text: `Breadth first search is an algorithm used for traversing graph,
    by visiting adjacent neighbours and adding them to queue. Next
    step of algorithm extracts from queue and repeats previous step, as 
    long as queue is not empty.
    `,
        time: `O(V+E)`,
        space: `O(V)`,
    },
    {
        text: `Select starting node, add it to stack and visited nodes.
        Next step of algorithms pops node from stack and adds to stack unvisited neighbours, as
        long as stack is not empty.
    `,
        time: `O(V+E)`,
        space: `O(V)`
    },
    {
        text: `Connectivity check performs breadth first
        search on given graph. Upon visiting all nodes
        of graph, it checks if number of visited nodes is
        same as number of graph's nodes. If it's not equal,
        the graph is not connected.
    `,
        time: `O(V+E)`,
        space: `O(V)`
    },
    {
        text: `Initialize algorithm by setting distances to all nodes
        to infinity. First node has distance 0. Find the distance to neighbours of current node,
        if it's shorter, decrease key in fib`,
        time: `O(E+V\logV)`,
        space: `O(V)`
    },

    {
        text: `Initialize algorithm by sorting edges in nondecreasing order and
        creating disjoint sets from vertices. Pick smallest available edge 
        and perform find operation between edge's nodes.
        If they are not in same set, append edge to result and make union between nodes. Select
        edges from array until all edges have been visited.`,
        time: `O(E\logE)`,
        space: `O(E + V)`
    },
    {
        text: `Algorithm sorts vertices by first initializing indegree values of graph and adding
        to queue those vertices with indegree equal to zero. It extracts from queue and decreases indegree
        value of its neighbours, if neighbour has indegree value equal to zero, algorithm adds it to queue.
        `,
        time: `O(V+E)`,
        space: `O(V)`
    },
    {
        text: `In bipartite check, we select starting node and color it 0.
        Upon visiting neighbours, we color them to different color from current node.
        If any of visited neighbours has the same color, graph is not bipartite. Else
        we run algorithm until whole graph is colored.`,
        time: `O(V+E)`,
        space: `O(V)`
    },

    {
        text: `If we are certain, that graph is a tree,
    we can find shortest paths to each vertice,
    using breadth first search. It starts
    with choosing starting node and assigning to it distance equal to zero. 
    During visiting node's neighbours, 
    algorithm assigns to them distance, which is sum of edge's
    weight and current node's distance`,
        time: `O(V+E)`,
        space: `O(V)`
    },
]