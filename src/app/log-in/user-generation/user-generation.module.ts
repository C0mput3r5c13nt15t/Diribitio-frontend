import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserGenerationPageRoutingModule } from './user-generation-routing.module';

import { UserGenerationPage } from './user-generation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserGenerationPageRoutingModule
  ],
  declarations: [UserGenerationPage]
})
export class UserGenerationPageModule {}
