import { GraphState, GraphAction } from "../../../shared/types/graph_map_types";
import { ActionType } from "../../../shared/enumerations/enums";

function reducer(state: GraphState, action: GraphAction): GraphState {

    switch (action.type) {

        case ActionType.MODE_ADD: {
            return { ...state, addMode: true, removeMode: false };
        }

        case ActionType.MODE_REMOVE: {
            return { ...state, first: -1, connect: false, addMode: false, removeMode: true };
        }

        case ActionType.MODE_CHOOSE: {
            return {...state, first: -1, connect: false, addMode: false, removeMode: false};
        }

        case ActionType.RESET: {
            return {...state, first: -1, connect: false, addMode: true, removeMode: false};
        }

        case ActionType.SET_PAIR: {
            if (state.first === -1) {
                return { ...state, first: action.payload, connect: true };
            }
            else {
                return { ...state, first: -1, connect: false };
            }
        }

        case ActionType.CHANGE_EDGE : {
            return {...state, edge_to_change : action.payload }
        }


        default: {
            return state;
        }

    }
}

export default reducer;