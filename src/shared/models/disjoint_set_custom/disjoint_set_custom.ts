import { DisjointSet } from "disjoint-set-ds/dist";



/**
 * Disjoint set extension
 * for making union find easier
 * and hiding implementation of
 * displaying showing sets
 */
export class DisjointSetCustom extends DisjointSet<string> {
    private nodes : string[];

    constructor(nodes : string[]){
        super();
        if (nodes.length === 0) {
            throw new RangeError("Nodes list must not be 0")
        }
        this.nodes = nodes;
        nodes.map((node : string) =>{
            this.makeSet(node)
        }
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