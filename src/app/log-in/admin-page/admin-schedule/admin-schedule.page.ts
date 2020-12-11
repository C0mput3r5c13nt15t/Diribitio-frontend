import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Schedule } from 'src/models/Schedule.model';
import { AdminsService } from 'src/app/services/admins.service';
import { ConfigService } from 'src/app/services/config.service';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AlertService } from 'src/app/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.page.html',
  styleUrls: ['./admin-schedule.page.scss'],
})
export class AdminSchedulePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  /**
   * Contains the time schedule of the application
   */
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

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  text: string;

  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
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

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Gets the current time schedule for the application and sets the schedule value
   */
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
