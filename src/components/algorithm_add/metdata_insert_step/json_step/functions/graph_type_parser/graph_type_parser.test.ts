import graph_type_parser from "./graph_type_parser";
import { AggregationInterface } from "../../../../../../algorithms/algorithms_description/json_interfaces";



const agg1: AggregationInterface = {description:"", title: "t",
    require_directed: true,
    require_non_directed: false,
    require_tree: false,
    require_weights: true
} 
const agg2: AggregationInterface = {description:"", title: "t",
    require_directed: false,
    require_non_directed: false,
    require_tree: false,
    require_weights: false
} 
const agg3: AggregationInterface = {description:"", title: "t",
    require_directed: false,
    require_non_directed: false,
    require_tree: true,
    require_weights: false
} 
const agg4: AggregationInterface = {description:"", title: "t",
    require_directed: false,
    require_non_directed: false,
    require_tree: false,
    require_weights: false
} 