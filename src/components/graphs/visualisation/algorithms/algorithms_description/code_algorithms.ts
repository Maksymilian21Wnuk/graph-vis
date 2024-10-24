



export const code_text : string[] = [
    `def bfs(g):
    visited = set({});
    let queue = [g.start_node];
    while (queue.length > 0):
        let node = queue.shift();
        if (!visited.has(node))
            visited.add(node);
            neighbours = g.get_neighbours(node);
            for (neighbour in neighbours)
                queue.push(neighbour)`,   
    `def dfs(g):
    visited = set({});
    let queue = [g.start_node];
    while (queue.length > 0):
        let node = queue.pop();
        if (!visited.has(node))
            visited.add(node);
            neighbours = g.get_neighbours(node);
            for (neighbour in neighbours)
                queue.push(neighbour)`,  

    `def bfs(g):
    visited = set({});
    let queue = [g.start_node];
    while (queue.length > 0):
        let node = queue.shift();
        if (!visited.has(node))
            visited.add(node);
            neighbours = g.get_neighbours(node);
            for (neighbour in neighbours)
                queue.push(neighbour)
    if (g.len != DOPISAC)`,

    `def dijkstra(g)`,

    `def kruskal(g):
    disjoint_set = DisjointSet()
    sorted_edges = sort(g.get_edges())
    result = []
    for node in g.get_nodes():
        disjoint_set.makeSet(node)
    for e in edges:
        if (disjoint_set.find(e.source) != disjoint_set.find(e.destination))
            disjoint_set.union(e.source, e.destination);
            result.push(e);
    return result`
]

