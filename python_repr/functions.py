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


def kruskal(g):
    
    
g = Graph({
     1: [5,2,4],
     2: [1,3],
     3: [5,2],
     4: [5,1,7],
     5: [1,3,4,8],
     6: [8],
     7: [8,4],
     8: [6,7,5],
     9: [],
     10: []
})

g.get_weight(1,565)