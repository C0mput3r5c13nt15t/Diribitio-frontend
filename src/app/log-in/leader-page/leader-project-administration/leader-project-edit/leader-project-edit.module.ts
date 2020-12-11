import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaderProjectEditPage } from './leader-project-edit.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderProjectEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaderProjectEditPage]
})
export class LeaderProjectEditPageModule {}
