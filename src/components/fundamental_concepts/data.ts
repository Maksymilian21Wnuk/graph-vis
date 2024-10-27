

export interface ConceptData {
    title: string;
    desc: string;
}

export const data: ConceptData[] = [
    {
        title: "Graph",
        desc: "Data structure, in which points are connected by edges."
    },
    {
        title: "Weighted graph",
        desc: "Graph where each edge has assigned a weight."
    },
    {
        title: "Directed graph",
        desc: "Graph in which edges have a direction, typically indicated by arrows."
    },
    {
        title: "Undirected graph",
        desc: "Plain graph with no directions."
    },
    {
        title: "Path",
        desc: "Sequence of vertices connected by edges, where vertices are distinct."
    },
    {
        title: "Cycle",
        desc: "A path in graph, that starts and ends at the same vertex, given that vertices on path are distinct."
    },
    {
        title: "Tree graph",
        desc: "Undirected graph with no cycles. Any two vertices are connected by exactly one path."
    },
    {
        title: "Connected graph",
        desc: "Graph where each pair of nodes is connected by edge. There exists a path between every node."
    },
    {
        title: `Disconnected graph`,
        desc: `Graph where exists a pair of nodes without a path.`
    },
    {
        title: "Minimum spanning tree",
        desc: "Edges that form tree from weighted graph, in which the weights are smallest."
    },
    {
        title: "Disjoint-set or Union-find",
        desc: "Data structure used in finding, if vertices form cycle."
    },
    {
        title: "Queue",
        desc: "Data structure in which oldest element is removed first"
    },
    {
        title: "Stack",
        desc: "Data structure where newest added element is removed first"
    },
    {
        title: "Complete graph",
        desc: "Graph in which every pair of vertices is connected by edge"
    },
    {
        title: "Bipartite graph",
        desc: `Graph whose vertices can be divided into two groups, such that 
    no edge exists between two vertices in same set`},
    {
        title: "Topological sorting",
        desc: `Directed graph sorting, that orders vertices such that 
        if there is connection from u to v, u comes first in ordering.
        For example, such sorting is used in solving dependencies of software,
        where installing program is dependant on another program.`
    },
    {
        title: `Fibonacci heap`,
        desc: `Data structure implementing priority queue operations.
        Used in Dijkstra's algorithm for constant time decrease key operation,
        when new distance is shorter than previous one.`
    },
    {
        title: `Decrease key operation`,
        desc: `Operation on priority queue that decreases value of given key,
        without changing correct order of priority queue.`
    }
]