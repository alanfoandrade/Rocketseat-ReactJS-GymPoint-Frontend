import { combineReducers } from 'redux';

import auth from './auth/reducer';
import provider from './provider/reducer';
import student from './student/reducer';
import plan from './plan/reducer';
import enrollment from './enrollment/reducer';
import helporder from './helporder/reducer';

export default combineReducers({
  auth,
  provider,
  student,
  plan,
  enrollment,
  helporder,
});
