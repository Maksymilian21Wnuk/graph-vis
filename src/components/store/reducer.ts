import { GraphAction, GraphState } from "../../shared/types/interactive_types";


function reducer(state: GraphState, action: GraphAction): GraphState {

    switch (action.type) {

        case "MODE_ADD": {
            return { ...state, addMode: true, removeMode: false };
        }

        case "MODE_REMOVE": {
            return { ...state, addMode: false, removeMode: true };
        }

        case 'SET_PAIR': {
            if (state.first === -1) {
                return { ...state, first: action.payload, connect: true };
            }
            else {
                return { ...state, first: -1, connect: false };
            }
        }

        case 'CHANGE_WEIGHTED' : {
            return {...state, weighted: action.payload};
        }

        default: {
            return state;
        }

    }
}

export default reducer;