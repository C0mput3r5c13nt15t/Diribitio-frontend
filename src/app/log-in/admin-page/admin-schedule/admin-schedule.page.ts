import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { AdminsService } from 'src/app/admins.service';
import { ConfigService } from 'src/app/config.service';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/schedule.service';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.page.html',
  styleUrls: ['./admin-schedule.page.scss'],
})
export class AdminSchedulePage implements OnInit {
  adminUrl: string;

  schedule: Zeitplan = {
    id: 1,
    begin: null,
    control: null,
    registration: null,
    sort_students: null,
    exchange: null,
    projects: null,
    end: null
  };

  currentDate: any;

  text: string;

  projectsNoun: string;
  eventNoun: string;

  constructor(private activatedRoute: ActivatedRoute,
              private adminsService: AdminsService,
              private scheduleService: ScheduleService,
              private router: Router,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.projectsNoun = this.config.app_config.projects_noun;
    this.eventNoun = this.config.app_config.eventname;

    this.text = this.config.get_content('admin-schedule');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.getSchedule();

    this.adminsService.update.subscribe(() => this.getSchedule());
  }

  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  mangaeSchedule() {
    this.scheduleService.putSchedule(this.schedule).subscribe(data => {
      this.alert.alert(data.message);
      this.scheduleService.update.emit();
      this.router.navigate(['Projekttage/Admin/' + this.adminUrl]);
    }, error => {
      this.alert.error('Aktualisierung des Zeitplans fehlgeschlagen!', error.error);
    });
  }

}
