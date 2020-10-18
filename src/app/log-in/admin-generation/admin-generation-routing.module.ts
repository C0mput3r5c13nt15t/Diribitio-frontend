import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGenerationPage } from './admin-generation.page';

const routes: Routes = [
  {
    path: '',
    component: AdminGenerationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminGenerationPageRoutingModule {}
