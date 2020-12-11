import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeaderProjectGenerationPage } from './leader-project-generation.page';

const routes: Routes = [
  {
    path: '',
    component: LeaderProjectGenerationPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeaderProjectGenerationPage]
})
export class LeaderProjectGenerationPageModule {}
