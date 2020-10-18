import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PromoteStudentsPageRoutingModule } from './promote-students-routing.module';

import { PromoteStudentsPage } from './promote-students.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromoteStudentsPageRoutingModule
  ],
  declarations: [PromoteStudentsPage]
})
export class PromoteStudentsPageModule {}
