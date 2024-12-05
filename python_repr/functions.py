from graph import Graph, WeightedGraph
from collections import deque
from scipy.cluster.hierarchy import DisjointSet

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
    

def kosaraju_dfs(g : Graph, node, visited : set, stack : list[int | str]):
    if node in visited:
        return
    else:
        visited.add(node)
        for nei in g.get_neighbours(node):
            kosaraju_dfs(g, nei, visited, stack)
        stack.append(node)
        
def kosaraju(g : Graph):
    stack = []
    visited = set()
    
    for node in g.get_nodes():
        kosaraju_dfs(g, node, visited, stack)
    
    g.transpose()
    result = []
    visited = set()
    while len(stack) != 0 :
        node = stack.pop()
        if node not in visited:
            comp = []
            kosaraju_dfs(g, node, visited, comp)
            result.append(comp)
    return result
            

def dijkstra(g : WeightedGraph):
    pass

def kruskal(g : WeightedGraph):
    edges = g.get_edges()
    # sort by edge's weight
    edges = deque(sorted(edges, key=lambda e : e.weight))
    disjoint_set = DisjointSet(g.get_nodes())
    result = []
    while len(edges) != 0 :
        edge = edges.popleft()
        # find operation, if not in same set 
        # add to set and to result
        if not disjoint_set.connected(edge.source, edge.dest):
            disjoint_set.merge(edge.source, edge.dest)
            result.append(edge)
            
    return result

g = Graph(
{
     1: [2,8],
     2: [4],
     3: [5,7],
     4: [1],
     5: [10],
     6: [5],
     7: [2,9],
     8: [],
     9: [6],
     10: [7,9]
}
          )

weig = WeightedGraph(
{
     1: {8: 12, 10: 6},
     2: {4: 21, 7: 7, 8: 1, 9: 1, 10: 17, 11: 5},
     3: {4: 16, 5: 27, 6: 0, 7: 6, 8: 16, 11: 18, 12: 18},
     4: {2: 21, 3: 16, 5: 18, 6: 4, 8: 26, 9: 11, 10: 11, 11: 1, 12: 5},
     5: {3: 27, 4: 18, 6: 7, 13: 0},
     6: {3: 0, 4: 4, 5: 7, 7: 27},
     7: {2: 7, 3: 6, 6: 27, 11: 15, 13: 0},
     8: {1: 12, 2: 1, 3: 16, 4: 26, 9: 26, 11: 4},
     9: {2: 1, 4: 11, 8: 26, 11: 13},
     10: {1: 6, 2: 17, 4: 11, 12: 20},
     11: {2: 5, 3: 18, 4: 1, 7: 15, 8: 4, 9: 13, 12: 14, 13: 11},
     12: {3: 18, 4: 5, 10: 20, 11: 14},
     13: {5: 0, 7: 0, 11: 11}
}
)

print(kruskal(weig))