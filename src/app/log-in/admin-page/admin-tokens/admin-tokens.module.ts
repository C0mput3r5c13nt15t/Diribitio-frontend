import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminTokensPageRoutingModule } from './admin-tokens-routing.module';

import { AdminTokensPage } from './admin-tokens.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminTokensPageRoutingModule
  ],
  declarations: [AdminTokensPage]
})
export class AdminTokensPageModule {}
