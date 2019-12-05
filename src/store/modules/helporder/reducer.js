import produce from 'immer';

const INITIAL_STATE = {
  helporders: [],
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@helporder/LOAD_SUCCESS': {
        draft.helporders = action.payload.helporders;
        break;
      }
      default:
    }
  });
}
