import { landenInitialState, LandenState } from './landen.state';
import { LandenActions, LandenActionTypes } from './landen.actions';

export function landenReducer(state = landenInitialState, action: LandenActions): LandenState {
  switch (action.type) {

    case LandenActionTypes.LANDEN_QUERY: {
      return Object.assign({}, state, {
        isLoading: true,
      });
    }

    case LandenActionTypes.LANDEN_LOADED: {
      return Object.assign({}, state, {
        landen: action.payload.landen,
        isLoading: false,
      });
    }

    case LandenActionTypes.LANDEN_ERROR: {
      return Object.assign({}, state, {
        isLoading: false,
        error: action.payload.error
      });
    }

    default:
      return state;
  }
}
