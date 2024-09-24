import Heap from "heap-js";
import { GraphAction, GraphState } from "../../shared/types/interactive_types";
import { Node } from "@xyflow/react";

const nodeDefaults = {
    style: {
      borderRadius: '100%',
      width: 50,
      height: 50,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

function reducer(state : GraphState, action : GraphAction) : GraphState{

    switch (action.type) {
        case "ADD_NODE": {
            // logic for adding node that was previously removed
            // and recycling its id
            let node_new : Node;
            if (state.minHeap.size() > 0){
                let id : any = state.minHeap.peek();
                let newHeap = new Heap<string>();
                newHeap.init([...state.minHeap.toArray().slice(1, state.minHeap.size())]);
                node_new = { id: id, position: { x:action.payload.x, y: action.payload.y}, data: { label: id }, ...nodeDefaults };
                return {...state, newNode: node_new, nodeCount: state.nodeCount + 1, addMode: true, removeMode: false, dragMode: false, minHeap: newHeap};
            }
            else{
                node_new = { id: String(state.nodeCount + 1), position: { x:action.payload.x, y: action.payload.y}, data: { label: String(state.nodeCount + 1) }, ...nodeDefaults };
                return {...state, newNode: node_new, nodeCount: state.nodeCount + 1, addMode: true, removeMode: false, dragMode: false};
            }
    
        }

        case "MODE_ADD": {
            return {...state, addMode: true, removeMode: false, dragMode: false};
        }

        case "MODE_REMOVE": {
            return {...state, nodeCount: state.nodeCount - 1, addMode: false, removeMode: true, dragMode: false};
        }

        case "COUNT_ADD":{
            return { ...state, nodeCount: state.nodeCount + action.payload};
        }

        case 'SET_PAIR': {
            if (state.first === -1){
                return {...state, first: action.payload, connect: true};
            }
            else{
                return {...state, first: -1, connect: false};
            }

        }

        case 'MOVE_MODE': {
            return {...state, addMode: false, removeMode: false, first: -1, dragMode: true};
        }

        case 'SET_MIN_HEAP': {
            // wtf but works
            let newHeap = new Heap<string>();
            newHeap.init([...state.minHeap.toArray(), action.payload]);
            console.log(newHeap);
            return {...state, minHeap: newHeap};
        }
        
        default: {
            return state;
        }

    }
}

export default reducer;