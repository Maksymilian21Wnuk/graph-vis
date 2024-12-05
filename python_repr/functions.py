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
    NOT_COLORED = -1
    
    colors = {}
    for node in g.get_nodes():
        colors[node] = NOT_COLORED
    
    for start_node in g.get_nodes():
        if (colors[start_node] == NOT_COLORED):
            queue = [start_node]
            colors[start_node] = BLUE
            
            while len(queue) != 0 : # check bipartitness of component
                node = queue.pop(0)
                for nei in g.get_neighbours(node):
                    if (colors[nei] == NOT_COLORED):
                        colors[nei] = BLUE if colors[node] == RED else RED
                        queue.append(nei)
                    else:
                        if colors[nei] == colors[node]:
                            return False
    return True

def tree_path(g):
    if not g.is_tree():
        print("Not a tree")
        return {}
    
    start = g.arbitrary_node()
    distances = {start: 0}
    visited = set()
    queue = [start]
    
    
    while len(queue) != 0 :
        node = queue.pop(0)
        visited.add(node)
        
        for nei in g.get_neighbours(node):
            if nei not in visited:
                distances[nei] = distances[node] + g.get_weight(node, nei)
                queue.append(nei)
    return distances
    
    
def kosaraju(g):
    pass

def dijkstra(g):
    pass

def kruskal(g):
    pass

g = Graph(
{
     1: {5: 1, 2: 17},
     2: {1: 17},
     5: {1: 1, 8: 24},
     6: {8: 24},
     7: {8: 15},
     8: {6: 24, 7: 15, 5: 24}
}
          )

print(tree_path(g))