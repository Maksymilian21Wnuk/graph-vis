



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
    if (g.len != DOPISAC)`
]

