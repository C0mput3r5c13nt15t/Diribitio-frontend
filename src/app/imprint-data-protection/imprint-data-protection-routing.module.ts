import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImprintDataProtectionPage } from './imprint-data-protection.page';

const routes: Routes = [
  {
    path: '',
    component: ImprintDataProtectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImprintDataProtectionPageRoutingModule {}
