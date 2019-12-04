import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';

import HandleStudent from '../pages/Student/HandleStudent';
import ListStudent from '../pages/Student';

import HandlePlan from '../pages/Plan/HandlePlan';
import ListPlan from '../pages/Plan';

import HandleEnrollment from '../pages/Enrollment/HandleEnrollment';
import ListEnrollment from '../pages/Enrollment';

import ListHelpOrder from '../pages/HelpOrder';
import AnswerHelpOrder from '../pages/HelpOrder/Answer';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard/ajuda/responder"
        exact
        component={AnswerHelpOrder}
        isPrivate
      />

      <Route
        path="/dashboard/ajuda"
        exact
        component={ListHelpOrder}
        isPrivate
      />

      <Route
        path="/dashboard/matricula/cadastrar"
        component={HandleEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula/editar"
        component={HandleEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula"
        exact
        component={ListEnrollment}
        isPrivate
      />

      <Route
        path="/dashboard/plano/cadastrar"
        component={HandlePlan}
        isPrivate
      />
      <Route path="/dashboard/plano/editar" component={HandlePlan} isPrivate />
      <Route path="/dashboard/plano" exact component={ListPlan} isPrivate />

      <Route
        path="/dashboard/aluno/cadastrar"
        component={HandleStudent}
        isPrivate
      />
      <Route
        path="/dashboard/aluno/editar"
        component={HandleStudent}
        isPrivate
      />
      <Route path="/dashboard/aluno" exact component={ListStudent} isPrivate />

      <Route path="/" exact component={Login} />

      <Route path="/" component={() => <h1>Ops, 404!!</h1>} />
    </Switch>
  );
}
