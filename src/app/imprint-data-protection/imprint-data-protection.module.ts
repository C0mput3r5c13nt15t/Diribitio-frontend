import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ImprintDataProtectionPage } from './imprint-data-protection.page';

const routes: Routes = [
  {
    path: '',
    component: ImprintDataProtectionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ImprintDataProtectionPage]
})
export class ImprintDataProtectionPageModule {}
