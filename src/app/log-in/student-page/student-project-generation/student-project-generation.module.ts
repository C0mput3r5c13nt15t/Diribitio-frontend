import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentProjectGenerationPage } from './student-project-generation.page';

const routes: Routes = [
  {
    path: '',
    component: StudentProjectGenerationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentProjectGenerationPage]
})
export class StudentProjectGenerationPageModule {}
