import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/models/Schedule.model';
import { AdminsService } from 'src/app/admins.service';
import { ConfigService } from 'src/app/config.service';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/schedule.service';
import { AlertService } from 'src/app/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.page.html',
  styleUrls: ['./admin-schedule.page.scss'],
})
export class AdminSchedulePage implements OnInit {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  schedule: Schedule = {
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

  projectsNoun = this.config.app_config.projects_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private scheduleService: ScheduleService,
              private router: Router,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('admin-schedule');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.getSchedule();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
      this.router.navigate([this.eventName + '/Admin/' + this.adminUrl]);
    }, error => {
      this.alert.error('Aktualisierung des Zeitplans fehlgeschlagen!', error.error);
    });
  }

}
