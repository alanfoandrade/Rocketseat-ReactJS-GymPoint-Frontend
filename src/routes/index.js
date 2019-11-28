import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Signin from '../pages/Signin';

import AddStudent from '../pages/Student/Add';
import ListStudent from '../pages/Student/List';
import EditStudent from '../pages/Student/Edit';

import AddPlan from '../pages/Plan/Add';
import ListPlan from '../pages/Plan/List';
import EditPlan from '../pages/Plan/Edit';

import AddEnrollment from '../pages/Enrollment/Add';
import ListEnrollment from '../pages/Enrollment/List';
import EditEnrollment from '../pages/Enrollment/Edit';

import ListHelpOrder from '../pages/HelpOrder/List';

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
        component={AddEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula/editar"
        component={EditEnrollment}
        isPrivate
      />
      <Route
        path="/dashboard/matricula"
        exact
        component={ListEnrollment}
        isPrivate
      />

      <Route path="/dashboard/plano/cadastrar" component={AddPlan} isPrivate />
      <Route path="/dashboard/plano/editar" component={EditPlan} isPrivate />
      <Route path="/dashboard/plano" exact component={ListPlan} isPrivate />

      <Route
        path="/dashboard/aluno/cadastrar"
        component={AddStudent}
        isPrivate
      />
      <Route path="/dashboard/aluno/editar" component={EditStudent} isPrivate />
      <Route path="/dashboard/aluno" exact component={ListStudent} isPrivate />

      <Route path="/" exact component={Signin} />

      <Route path="/" component={() => <h1>Ops, 404!!</h1>} />
    </Switch>
  );
}
