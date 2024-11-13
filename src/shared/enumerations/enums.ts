
/**
 * Size for downloaded image
 */
export enum ImageSize {
    WIDTH = 768,
    HEIGHT = 400
}

/**
 * Action type for reducer
 * locally used in viewport,
 * used for performing
 * operations on graph representation
 */
export enum ActionType {
    MODE_ADD,
    MODE_REMOVE,
    MODE_CHOOSE,
    SET_PAIR,
    CHANGE_EDGE,
}

/**
 * Weight enum of graph viewport
 */
export enum Weight {
    WEIGHTED = "1",
    UNWEIGHTED = "",
};
/**
 * Color enum for default
 * colors of graph visualisation's node
 * coloring
 */
export enum NodeColor {
    VISITED = "#ffed29",
    UNVISITED = "white",
    CURRENT = "#FF7074",
    CURRENTLY_VISITING = "orange",
};
/**
 * Color enum for default
 * colors of graph visualisation's edge
 * coloring
 */
export enum EdgeColor {
    VISITED = "#a3951a",
    UNVISITED = "black",
    CURRENT = "#ed556a",
}
/**
 * weird, but not selected value
 * for connecting nodes
 */
export enum Value {
    NOT_SELECTED = -1,
}
/**
 * co to jest?
 */
export enum DIRECTION {
    LEFT,
    RIGHT
}

/**
 * json actions for getting
 * static data for algorithms
 */
export enum JsonFileAction {
    Steps,
    Code,
    Aggregation,
    Description
}