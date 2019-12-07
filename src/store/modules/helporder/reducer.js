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
      case '@helporder/UPDATE_SUCCESS': {
        const helporderIndex = draft.helporders.findIndex(
          s => s.id === action.payload.id
        );

        draft.helpAnswering = {};
        if (helporderIndex >= 0) {
          draft.helporders.splice(helporderIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
