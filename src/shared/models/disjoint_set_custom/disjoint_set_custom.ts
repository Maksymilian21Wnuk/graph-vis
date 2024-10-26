import { DisjointSet } from "disjoint-set-ds/dist";

/*
extending class for
making set easier and easier
display of sets in current forest
*/
export class DisjointSetCustom extends DisjointSet<string> {
    private nodes : string[];

    constructor(nodes : string[]){
        super();
        this.nodes = nodes;
        nodes.map((node : string) =>
            this.makeSet(node)
        )
    }

    // for representation of sets
    public get_sets() : Map<string, string[]> {
        let sets = new Map<string, string[]>();
        this.nodes.map((node : string) => {
            const root = this.find(node);
            if (!sets.get(root)){
                sets.set(root, [root]);
            }
            else{
                sets.set(root, [...sets.get(root)!, node])
            }
        })

        return sets;
    }
    
}