import produce from 'immer';

const INITIAL_STATE = {
  plans: [],
  planUpdating: {},
  page: 1,
};

export default function plan(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@plan/CREATE_SUCCESS': {
        draft.plans.push(action.payload.plan);
        break;
      }

      case '@plan/LOAD_SUCCESS': {
        draft.plans = action.payload.plans;
        draft.page = action.payload.page;
        break;
      }

      case '@plan/SET_UPDATING': {
        draft.planUpdating = action.payload.planUpdating;
        break;
      }

      case '@plan/RESET_UPDATING': {
        draft.planUpdating = {};
        break;
      }

      case '@plan/UPDATE_SUCCESS': {
        const planIndex = draft.plans.findIndex(
          p => p.id === action.payload.plan.id
        );

        if (planIndex >= 0) {
          draft.plans[planIndex] = action.payload.plan;
        }

        draft.planUpdating = {};
        break;
      }

      default:
    }
  });
}
