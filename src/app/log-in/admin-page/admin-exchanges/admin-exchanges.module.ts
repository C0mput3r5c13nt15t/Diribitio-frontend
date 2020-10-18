import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminExchangesPage } from './admin-exchanges.page';

const routes: Routes = [
  {
    path: '',
    component: AdminExchangesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminExchangesPage]
})
export class AdminExchangesPageModule {}
