from graph import Graph

def dfs_recursion(vertice, parent, visited, g):
    if vertice in visited:
        return
    else:
        visited.add(vertice)
        print(vertice)
        for nei in g.get_neighbours(vertice):
            if (nei != parent):
                dfs_recursion(nei, vertice, visited, g)

def dfs(g):
	visited = set()
	dfs_recursion(g.arbitrary_node(), -1, visited, g)
 

def bfs(g):
    visited = set()
    queue = [g.arbitrary_node()]
    while len(queue) != 0 :
        node = queue.pop(0)
        if (node not in visited):
            visited.add(node)
            print(node)
            neighbours = g.get_neighbours(node)
            for nei in neighbours:
                queue.append(nei)

def connectivity_check(g):
    visited = set()
    queue = [g.arbitrary_node()]
    while len(queue) != 0 :
        node = queue.pop(0)
        if (node not in visited):
            visited.add(node)
            neighbours = g.get_neighbours(node)
            for nei in neighbours:
                queue.append(nei)
    if (len(visited) != g.size()):
        print("Not connected")
    else:
        print("Connected")


def kahn(g):
    indegrees = {}
    for node in g.get_nodes():
        indegrees[node] = 0
    
    for node in g.get_nodes():
        for neighbour in g.get_neighbours(node):
            indegrees[neighbour] += 1
    queue = []

    for node in indegrees:
        if indegrees[node] == 0 :
            queue.append(node)
    result = []    
    while len(queue) != 0 :
        node = queue.pop(0)
        result.append(node)
        for neighbour in g.get_neighbours(node):
            indegrees[neighbour] -= 1
            if indegrees[neighbour] == 0:
                queue.append(neighbour)
    
    if len(result) != g.size():
        print("Graph has no topological ordering")
        return []
    
    return result

def bipartite_check(g):
    BLUE = 0
    RED = 1
    
    current_color = BLUE
    
    visited = set()
    queue = [g.arbitrary_node()]
    
    while len(queue) != 0 :
        node = queue.pop(0)
        if (node not in visited):
            visited.add(node)
            print(node)
            neighbours = g.get_neighbours(node)
            for nei in neighbours:
                queue.append(nei)

    return True

g = Graph(
{
     1: [2],
     2: [4],
     4: [5,1],
     5: [6],
     6: [9,7,8],
     7: [8],
     8: [],
     9: [8]
}
          )

print(kahn(g))