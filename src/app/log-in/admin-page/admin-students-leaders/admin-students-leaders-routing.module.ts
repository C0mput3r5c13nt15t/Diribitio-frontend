import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminStudentsLeadersPage } from './admin-students-leaders.page';

const routes: Routes = [
  {
    path: '',
    component: AdminStudentsLeadersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminStudentsLeadersPageRoutingModule {}
