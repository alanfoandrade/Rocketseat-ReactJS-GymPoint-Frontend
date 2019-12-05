import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/LOAD_SUCCESS': {
        draft.plans = action.payload.plans;
        break;
      }
      case '@plan/DELETE_SUCCESS': {
        const planIndex = draft.plans.findIndex(
          s => s.id === action.payload.id
        );

        if (planIndex >= 0) {
          draft.plans.splice(planIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
