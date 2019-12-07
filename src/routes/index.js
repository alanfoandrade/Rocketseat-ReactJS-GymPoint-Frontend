import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';

import FormStudent from '../pages/Student/FormStudent';
import ListStudent from '../pages/Student';

import FormPlan from '../pages/Plan/FormPlan';
import ListPlan from '../pages/Plan';

import FormEnrollment from '../pages/Enrollment/FormEnrollment';
import ListEnrollment from '../pages/Enrollment';

import ListHelpOrder from '../pages/HelpOrder';

export default function Routes() {
  return (
    <Switch>
      <Route
        path="/dashboard/ajuda"
        exact
        component={ListHelpOrder}
        isPrivate
      />

      <Route
        path="/dashboard/matricula/cadastrar"
        component={FormEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula/editar"
        component={FormEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula"
        exact
        component={ListEnrollment}
        isPrivate
      />

      <Route path="/dashboard/plano/cadastrar" component={FormPlan} isPrivate />
      <Route path="/dashboard/plano/editar" component={FormPlan} isPrivate />
      <Route path="/dashboard/plano" exact component={ListPlan} isPrivate />

      <Route
        path="/dashboard/aluno/cadastrar"
        component={FormStudent}
        isPrivate
      />
      <Route path="/dashboard/aluno/editar" component={FormStudent} isPrivate />
      <Route path="/dashboard/aluno" exact component={ListStudent} isPrivate />

      <Route path="/" exact component={Login} />

      <Route path="/" component={() => <h1>Ops, 404!!</h1>} />
    </Switch>
  );
}
