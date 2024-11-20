# Interactive graph algorithms visualisation


<summary>Table of Contents</summary>
<ol>
    <li>
        <a href="#about-the-project">About The Project</a>
    </li>
    <li>
        <a href="#start-project">Starting Application</a>
    </li>
    <li>
        <a href="#structure">Structure</a>
    </li>
</ol>

## About 
Interactive graph algorithms visualisation is an app created in 
react with typescript that aims to......
## Starting Application

blablabla

## Functionality

This is divided into two main parts,
interactive which corresponds to graph creation, and visualisation that is more about how algorithms are visualised on given graph.

### Interactive part

1. Graph Panel:
    1. Spawning nodes on panel click, maintaining correct labeling of node.
    2. Connecting edges, saving state of boolean that determines if graph is weighted or directed. Correctly handle adding edges when new weighted or directed edge is added.
    3. Removing node, correctly handle removing edges related to removed node.
    4. Making graph directed by randomly assigning directions of edges.
    5. Making graph weighted by randomly assigning
    weights to graph or removing weights.
    6. Clearing graph by removing all nodes and edges.
    7. Assigning specific weight on edge click.

2. Graph representation popup:
    1. Adjacency list representation.
    2. Matrix representation.
    3. Representation of graph's structure in python with copying it to clipboard.
    4. Hiding popup for examination of graph being represented

3. Graph presets:
    1. Saving graph to local storage:
        1. Graph's name as a key
        2. Nodes and edges of graph as values
        3. If name is the same, update graph in local storage
        4. Proper saving of graph, during graph coloring/visualisation we need to save correct, that is resetted version of graph
        5. Maintaining weights and directions on save
    2. Loading from local storage or hardcoded graphs:
        1. Distinction of hardcoded and local storage saved graphs
        2. Removal of local storage graphs
        3. Properly spawn graphs, with handling correctness of graph's state (weighted, directed)
    3. Random graph spawning:
        1. Adjusting the probability of edge and number of nodes
        2. Placement of nodes on panel using simple trigonometry. Nodes are placed evenly on a circle with given radius.
    4. Fundamental concepts page:
        1. Definitions of essential concepts for learning graph algorithms.
        2. Finding concept by name using search input.
        3. Appending new concepts by using script from instructions folder.

### Visualisation

### Steps
1. Steps are being visualised as colorings on graph's panel.
2. On right side of page, there are visualised structures used in algorithm. In this program, I call them additionals. Currently supported additionals: 
    - Queue\<string\> 
    - Map\<string, number\>
    - Set\<string\>
    - Array\<string | PlainEdge\>
    - DisjointSetCustom (extension of type DisjointSet for making visualisation of union-find additionals easier)
3. On left side of page, there is textual representation of algorithm's steps. N'th step is being highlighed upon it's visualisation on panel.
4. From steps dropdown, user may also display textual representation of algorithm's description alongside the time and space complexity.
5. The steps may be progressed by using 'Next' button on bottom's side of panel. Moreover, there is also a 'Prev' button, which returns to previous step visualisation.
6. Progression of visualisation may also be animated by clicking 'Animate' button. User have also an ability of changing speed of animation using slider to the left of buttons.
7. Visualisation can be finished by clicking 'Reset' button.

### Writing algorithms
1. Every new writen algorithm requires 4 things, those are:
    1. Text representation of steps
    2. Description with complexity
    3. Metadata describing algorithm, that is:
        - name displayed on algorithm's list
        - name of typescript's function
        - description displayed on algorithm's list
        - booleans that describe requirements of function:
            - weight requirement
            - direction requirement
            - undirected requirement
            - tree requirement
    4. Typescript function that implements visualisation of algorithm. Function's name must be same as the one provided in metadata.
2. Each of those 4 things have their placement in src folder, but for making things simple, there is a script for creating that data. Find it in instructions folder. For more details on that, check the writing_algorithms.pdf file in instructions folder.

3. After running instructions script, you must implement the algorithm you want to visualise. There will be created a file in folder
```
/src/algorithms/"NAME_YOU_PROVIDED".ts
```