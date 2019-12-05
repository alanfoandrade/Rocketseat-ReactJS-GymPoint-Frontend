import produce from 'immer';

const INITIAL_STATE = {
  enrollments: [],
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/LOAD_SUCCESS': {
        draft.enrollments = action.payload.enrollments;
        break;
      }
      case '@enrollment/DELETE_SUCCESS': {
        const enrollmentIndex = draft.enrollments.findIndex(
          s => s.id === action.payload.id
        );

        if (enrollmentIndex >= 0) {
          draft.enrollments.splice(enrollmentIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
