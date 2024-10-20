

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

const ARROW_SVG_ID = "custom_arrow"
const INVISIBLE_ARROW = "invisible_arrow"
const RED_ARROW_SVG = "red_arrow"
const VISITED_ARROW_SVG = "yellow_arrow"
const NO_ARROW = ""
const TITLES : string[] = ["Description", "Step-by-step", "Pseudocode"]
const NOT_SELECTED : number = -1;
const WIDTH : number = 700
const HEIGHT : number = 500
const NODE_MAX : number = 20


export {RED_ARROW_SVG, INVISIBLE_ARROW, VISITED_ARROW_SVG ,NO_ARROW, WIDTH, HEIGHT, NODE_MAX, nodeDefaultStyle, edgeDefaultStyle, NOT_SELECTED, TITLES, ARROW_SVG_ID}