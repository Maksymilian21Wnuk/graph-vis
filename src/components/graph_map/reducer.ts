import { GraphAction, GraphState } from "../../shared/types/types";


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
            let node_new = { id: String(state.nodeCount), position: { x:0, y: 0}, data: { label: String(state.nodeCount) }, ...nodeDefaults };
            return {...state, newNode: node_new, nodeCount: state.nodeCount + 1, addMode: true, removeMode: false};
    
        }

        case "REMOVE_NODE": {
            return {...state, nodeCount: state.nodeCount - 1, addMode: false, removeMode: true};
        }

        case "COUNT_ADD":{
            return { ...state, nodeCount: state.nodeCount + action.payload};
        }

        case 'SET_PAIR': {
            if (state.first === -1 && state.second === -1){
                return {...state, first: action.payload};
            }
            else if(state.first !== -1 && state.second === -1){
                return {...state, second: action.payload};
            }
            else{
                return {...state, first: -1, second: -1};
            }

        }

        case 'MOVE_MODE': {
            return {...state, addMode: false, removeMode: false, second: -1, first: -1, dragMode: true};
        }
        
        default: {
            return state;
        }

    }
}

export default reducer;