

const nodeDefaultStyle = {
    style: {
      borderRadius: '100%',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
};

const edgeDefaultStyle = {
    style : {
        stroke: "black",
    }
}

const TITLES : string[] = ["Description", "Step-by-step", "Pseudocode"]
const NOT_SELECTED : number = -1;
const WIDTH : number = 700
const HEIGHT : number = 500
const NODE_MAX : number = 20
const HELP_TXT : string = `This page was created for visualisation of most popular algorithms on graphs. 
You can add nodes by choosing add button and then clicking on map and add edges by clicking two nodes. 
Removal happens after clicking remove button and choosing either node or edge. 
Run algorithm using dropdown panel on down side of page.`

export {WIDTH, HEIGHT, NODE_MAX, HELP_TXT, nodeDefaultStyle, edgeDefaultStyle, NOT_SELECTED, TITLES}