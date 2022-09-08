import {
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  CREATE_STREAM
} from '../actions/types'

export default (state = {}, action ) => {
  switch (action.type) {
    default:
      case: FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case: CREATE_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      case: EDIT_STREAM:
        return { ...state, [action.payload.id]: action.payload };
      default:
        return state;
  }
};
