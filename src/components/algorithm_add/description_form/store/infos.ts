import { CheckboxInputInterface, InputInterface, OutputInterface } from "../util/input_interface"

export const one_line_info: InputInterface[] = [
    { title: "Algorithm name", desc: "This will be displayed algorithm name", name: "title" },
    { title: "Function name", desc: "Function name for algorithm implementation, no space required", name: "name" },
    { title: "Short info", desc: "Short info displayed in algorithm list", name: "text" },
    { title: "Time complexity", desc: "Time complexity of algorithm", name: "time" },
    { title: "Space complexity", desc: "Space complexity of algorithm", name: "space" }
]

export const large_info: InputInterface[] = [
    { title: "Detailed description", desc: "Detailed description of algorithm", name: "description", placeholder: `This algorithm does something. It starts from visiting...` },
    { title: "Steps of algorithm", desc: "Algorithm's steps separated by endline", name: "steps", placeholder: `Get arbitrary node\nVisit its neighbours\nIf neighbour visited...\nTerminate` },
]

export const code_info: InputInterface[] = [
    { title: "Code", desc: "Code representation of algorithm visualised. It should be written in python, since it's widely used.", name: "code", placeholder: "def algorithm(g):" },
]

export const checkboxes: CheckboxInputInterface[] = [
    { name: "require_directed", title: "Directed" },
    { name: "require_weights", title: "Weighted" },
    { name: "require_non_directed", title: "Undirected" },
    { name: "require_tree", title: "Tree" }
]



export const initialOutput: OutputInterface = {
    title: "",
    name: "",
    text: "",
    time: "",
    space: "",
    description: "",
    steps: "",
    code: "",
}

export const exampleOutput: OutputInterface = {
    title: "Breadth first search",
    name: "bfs",
    text: "Graph traversal with queue structure",
    time: "O(V+E)",
    space: "O(V)",
    description: "Breadth first search is an algorithm used for traversing graph, by visiting adjacent neighbours and adding them to queue. Next step of algorithm extracts from queue and repeats previous step, as long as queue is not empty",
    steps: `Initialize queue Q
Extract node from Q
Add unvisited neighbours to Q
Repeat from 2, if Q is not empty
Q is empty
Terminate`,
    code: `def bfs(g)
visited = set({})
queue = Queue(g.arbitrary_node())
while (queue.length > 0):
    node = queue.pop()
    if (!visited.has(node)):
        visited.add(node)
        neighbours = g.get_neighbours(node)
        for (neighbour in neighbours)
            queue.push(neighbour) `,
}