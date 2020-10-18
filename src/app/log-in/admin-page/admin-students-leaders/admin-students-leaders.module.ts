import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminStudentsLeadersPageRoutingModule } from './admin-students-leaders-routing.module';

import { AdminStudentsLeadersPage } from './admin-students-leaders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminStudentsLeadersPageRoutingModule
  ],
  declarations: [AdminStudentsLeadersPage]
})
export class AdminStudentsLeadersPageModule {}
