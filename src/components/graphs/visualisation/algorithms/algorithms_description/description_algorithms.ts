
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
        text: `Here will be some description about
    graph algorithm number 0 that is bfs
    bla bla bla bla sdfadfs fasdfas
    lorem ipsum.
    `,
        time: `O(V+E)`,
        space: `O(V)`
    },
    {
        text: `Connectivity check performs breadth first
        search on given graph. However, upon visiting all nodes
        of graph, it checks if number of visited nodes is
        same as number of graph's nodes. If it's not equal,
        the graph is not connected.
    `,
        time: `O(V+E)`,
        space: `O(V)`
    },
    {
        text: `Dijkstra is an algorithm used in shortest path
        finding. It uses dynamic programming aproach to
        calculate paths between starting node and...`,
        time: `O(E+V\logV)`,
        space: ``
    },

    {
        text: `Kruskal`,
        time: `O(E\logE)`,
        space: `O(E)`
    },
    {
        text: `Kahn`,
        time: `O(V+E)`,
        space: ``
    },
    {
        text: `Bipartite`,
        time: ``,
        space: ``
    },

    {
        text: `If we are certain, that graph is unweighted tree,
    we can find shortest paths to each vertice in O(V + E)
    time using breadth first search. It starts
    with choosing starting node and assigning to it distance equal to zero. 
    During visiting node's neighbours, 
    algorithm assigns to neighbours current node's
    distance + 1.`,
        time: ``,
        space: ``
    }
]