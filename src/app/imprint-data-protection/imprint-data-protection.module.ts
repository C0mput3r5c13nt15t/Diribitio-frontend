import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImprintDataProtectionPageRoutingModule } from './imprint-data-protection-routing.module';

import { ImprintDataProtectionPage } from './imprint-data-protection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImprintDataProtectionPageRoutingModule
  ],
  declarations: [ImprintDataProtectionPage]
})
export class ImprintDataProtectionPageModule {}
