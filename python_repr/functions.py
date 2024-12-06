from graph import Graph, WeightedGraph
from collections import deque
from scipy.cluster.hierarchy import DisjointSet
from heap import Heap

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
            
# heap implementation, runs in O((E+V)logV)
def dijkstra(g : WeightedGraph, start_node : str | int):
    heap = Heap((0, start_node))
    
    distances = {node : float('inf') for node in g.get_nodes()}
    distances[start_node] = 0
    
    visited = set()
    while len(heap) != 0:
        current_distance, node = heap.pop()
        if node in visited:
            continue
        for nei in g.get_neighbours(node):
            new_dist = g.get_weight(node, nei) + current_distance
            old_dist = distances[nei]
            
            if new_dist < old_dist:
                print(new_dist)
                distances[nei] = new_dist
                heap.push((new_dist, nei))
                
    return distances

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
     1: {5: 19, 2: 0, 4: 7, 3: 11},
     2: {1: 0, 3: 14},
     3: {5: 15, 2: 14, 6: 20, 1: 11},
     4: {5: 17, 1: 7, 7: 5},
     5: {1: 19, 3: 15, 4: 17, 8: 8, 7: 19, 6: 13},
     6: {8: 4, 5: 13, 3: 20},
     7: {8: 1, 4: 5, 5: 19},
     8: {6: 4, 7: 1, 5: 8},
     9: {10: 25},
     10: {9: 25, 11: 26},
     11: {10: 26}
}
)

print(dijkstra(weig, 1))