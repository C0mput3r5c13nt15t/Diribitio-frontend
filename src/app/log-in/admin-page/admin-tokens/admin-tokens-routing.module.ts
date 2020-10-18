import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminTokensPage } from './admin-tokens.page';

const routes: Routes = [
  {
    path: '',
    component: AdminTokensPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminTokensPageRoutingModule {}
