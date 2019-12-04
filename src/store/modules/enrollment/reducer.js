import produce from 'immer';

const INITIAL_STATE = {
  enrollments: null,
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/LOAD_SUCCESS': {
        draft.enrollments = action.payload.enrollments;
        break;
      }
      default:
    }
  });
}
