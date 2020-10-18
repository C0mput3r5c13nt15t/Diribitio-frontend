import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminSchedulePageRoutingModule } from './admin-schedule-routing.module';

import { AdminSchedulePage } from './admin-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminSchedulePageRoutingModule
  ],
  declarations: [AdminSchedulePage]
})
export class AdminSchedulePageModule {}
