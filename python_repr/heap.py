import heapq



class Heap():
    
    def __init__(self, value):
        self.heap = []
        heapq.heappush(self.heap, value)
        
    def __len__(self):
        return len(self.heap)
    
    def push(self, value):
        heapq.heappush(self.heap, value)
    
    def pop(self):
        return heapq.heappop(self.heap)