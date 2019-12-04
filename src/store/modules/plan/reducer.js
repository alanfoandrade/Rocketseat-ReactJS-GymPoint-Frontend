import produce from 'immer';

const INITIAL_STATE = {
  plans: null,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/LOAD_SUCCESS': {
        draft.plans = action.payload.plans;
        break;
      }
      default:
    }
  });
}
