import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminStudentsLeadersPage } from './admin-students-leaders.page';

const routes: Routes = [
  {
    path: '',
    component: AdminStudentsLeadersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminStudentsLeadersPage]
})
export class AdminStudentsLeadersPageModule {}
