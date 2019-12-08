import produce from 'immer';

const INITIAL_STATE = {
  enrollments: [],
  enrollUpdating: {},
};

export default function enrollment(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@enrollment/CREATE_SUCCESS': {
        draft.enrollments.push(action.payload.enrollment);
        break;
      }

      case '@enrollment/LOAD_SUCCESS': {
        draft.enrollments = action.payload.enrollments;
        break;
      }

      case '@enrollment/SET_UPDATING': {
        draft.enrollUpdating = action.payload.enrollUpdating;
        break;
      }

      case '@enrollment/RESET_UPDATING': {
        draft.enrollUpdating = {};
        break;
      }

      case '@enrollment/UPDATE_SUCCESS': {
        const enrollmentIndex = draft.enrollments.findIndex(
          enroll => enroll.id === action.payload.enrollment.id
        );

        if (enrollmentIndex >= 0) {
          draft.enrollments[enrollmentIndex] = action.payload.enrollment;
        }

        draft.enrollUpdating = {};
        break;
      }

      default:
    }
  });
}
