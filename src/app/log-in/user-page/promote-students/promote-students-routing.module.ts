import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromoteStudentsPage } from './promote-students.page';

const routes: Routes = [
  {
    path: '',
    component: PromoteStudentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoteStudentsPageRoutingModule {}
