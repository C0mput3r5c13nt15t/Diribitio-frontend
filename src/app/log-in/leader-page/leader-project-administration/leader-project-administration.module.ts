import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaderProjectAdministrationPage } from './leader-project-administration.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderProjectAdministrationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaderProjectAdministrationPage]
})
export class LeaderProjectAdministrationPageModule {}
