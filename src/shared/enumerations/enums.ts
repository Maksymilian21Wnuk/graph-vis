

export enum ActionType {
    MODE_ADD,
    MODE_REMOVE,
    MODE_CHOOSE,
    SET_PAIR,
    CHANGE_WEIGHTED,
    CHANGE_EDGE,
}

export enum Weight {
    WEIGHTED = "1",
    UNWEIGHTED = "",
};

export enum NodeColor {
    VISITED = "#ffed29",
    UNVISITED = "white",
    CURRENT = "#FF7074",
    CURRENTLY_VISITING = "orange",
};

export enum EdgeColor {
    VISITED = "#a3951a",
    UNVISITED = "black",
    CURRENT = "#ed556a",
}

export enum Value {
    NOT_SELECTED = -1,
}

export enum DIRECTION {
    LEFT,
    RIGHT
}