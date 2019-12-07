import produce from 'immer';

const INITIAL_STATE = {
  students: [],
  studentUpdating: {},
};

export default function student(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@student/CREATE_SUCCESS': {
        draft.students.push(action.payload.student);
        break;
      }
      case '@student/LOAD_SUCCESS': {
        draft.students = action.payload.students;
        break;
      }
      case '@student/SET_UPDATING': {
        draft.studentUpdating = action.payload.studentUpdating;
        break;
      }
      case '@student/RESET_UPDATING': {
        draft.studentUpdating = {};
        break;
      }
      case '@student/UPDATE_SUCCESS': {
        const studentIndex = draft.students.findIndex(
          s => s.id === action.payload.student.id
        );

        if (studentIndex >= 0) {
          draft.students[studentIndex] = action.payload.student;
        }

        draft.studentUpdating = {};
        break;
      }
      case '@student/DELETE_SUCCESS': {
        const studentIndex = draft.students.findIndex(
          s => s.id === action.payload.id
        );

        if (studentIndex >= 0) {
          draft.students.splice(studentIndex, 1);
        }
        break;
      }
      default:
    }
  });
}
