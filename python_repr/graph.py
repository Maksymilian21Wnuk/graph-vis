from random import choice
from typing import List

class Graph:
        
    def __init__(self, repr):
        self.repr = repr
        
    def __len__(self):
        return len(list(self.repr.keys()))
    
    def size(self):
        return len(self)
    
    def get_nodes(self):
        return list(self.repr.keys())
    
    def get_neighbours(self, vertice : int) -> List[int]:
        return self.repr[vertice]
    
    def get_weight(self, source, dest):
        if type(self.repr[source]) != dict: 
            # does exist, distance 1
            if dest in self.repr[source]:
                return 1
            # does not exist, weight inf
            else:
                return float('inf')
        else:
            return self.repr[source][dest]
    
    def arbitrary_node(self) -> int:
        return 1
        #return choice(list(self.repr.keys()))