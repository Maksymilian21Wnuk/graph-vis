from random import choice
from typing import Dict, List


class Edge:
    def __init__(self, source, dest):
        self.source = source
        self.dest = dest
        
    def __repr__(self) -> str:
        return "{}->{}".format(self.source, self.dest)
    
        
class WeightedEdge(Edge):
    def __init__(self, source, dest, weight):
        super().__init__(source, dest)
        self.weight = weight
    
    def __repr__(self) -> str:
        return super().__repr__() + " {}".format(self.weight)


class Graph:
    """
    Model of Graph class used in 
    python's code description.
    """
    def __init__(self, representation : Dict[str | int, str | int]):
        self.representation = representation
        
    def __len__(self) -> int:
        return len(list(self.representation.keys()))
    
    def get_representation(self) -> List[int | str]:
        return self.representation
     
    def size(self) -> int:
        return len(self)
    
    def get_nodes(self) -> List[int]:
        return list(self.representation.keys())
    
    def get_neighbours(self, vertice : int) -> List[int]:
        return self.representation[vertice]
    
    # transpose directed graph, that is
    # the edge 1->2 is now 2->1
    def transpose(self) -> None:
        representation = {node: [] for node in self.get_nodes()}
        for node in self.representation:
            for nei in self.get_neighbours(node):
                representation[nei].append(node)
        self.representation = representation
    
    def arbitrary_node(self) -> int:
        return 1
        #return choice(list(self.representation.keys()))
        
        
class WeightedGraph(Graph):
    def __init__(self, representation : Dict[int | str, Dict[int | str, int]]):
        super()
        self.representation = representation
        
    def get_weight(self, source, dest) -> int:
        if dest not in self.representation[source]:
            return float('inf')
        else:
            return self.representation[source][dest]
        
    def get_edges(self) -> List[WeightedEdge]:
        edges = []
        for node in self.get_nodes():
            for nei in self.get_neighbours(node):
                edges.append(WeightedEdge(node, nei, self.get_weight(node, nei)))
        return edges