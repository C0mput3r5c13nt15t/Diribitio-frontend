import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentProjectAdministrationPage } from './student-project-administration.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProjectAdministrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentProjectAdministrationPage]
})
export class StudentProjectAdministrationPageModule {}
