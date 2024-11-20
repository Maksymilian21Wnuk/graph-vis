

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
const NO_WEIGHT = ""
const TITLES : string[] = ["Description", "Step-by-step", "Pseudocode"]
const NOT_SELECTED : string = "";
const WIDTH : number = 700
const HEIGHT : number = 500
/** Maximum count of node on viewport */
const NODE_MAX : number = 30
const PORTRAIT_MIN_WIDTH = 600
// number of presets hardcoded
const PRESETS_COUNT = 6;
const INFINITY_ASCII = "∞";
const DOWNLOAD_COUNTER_NAME : string = 'download-counter'
const MIN_ZOOM = 0.45;


export {MIN_ZOOM, DOWNLOAD_COUNTER_NAME, INFINITY_ASCII, NO_WEIGHT, PRESETS_COUNT, PORTRAIT_MIN_WIDTH, RED_ARROW_SVG, INVISIBLE_ARROW, VISITED_ARROW_SVG ,NO_ARROW, WIDTH, HEIGHT, NODE_MAX, nodeDefaultStyle, edgeDefaultStyle, NOT_SELECTED, TITLES, ARROW_SVG_ID}