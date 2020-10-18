import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectAdministrationPage } from './project-administration.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectAdministrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectAdministrationPage]
})
export class ProjectAdministrationPageModule {}
