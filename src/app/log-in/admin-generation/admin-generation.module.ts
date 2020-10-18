import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminGenerationPageRoutingModule } from './admin-generation-routing.module';

import { AdminGenerationPage } from './admin-generation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminGenerationPageRoutingModule
  ],
  declarations: [AdminGenerationPage]
})
export class AdminGenerationPageModule {}
