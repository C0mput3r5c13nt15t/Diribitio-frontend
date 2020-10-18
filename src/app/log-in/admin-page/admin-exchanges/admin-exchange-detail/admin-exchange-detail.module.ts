import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminExchangeDetailPage } from './admin-exchange-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdminExchangeDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminExchangeDetailPage]
})
export class AdminExchangeDetailPageModule {}
