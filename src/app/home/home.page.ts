import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

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

  welcome = this.config.home.welcome;
  articles = this.config.home.articles;

  projectsNoun = this.config.app_config.projects_noun;
  eventNoun = this.config.app_config.event_name;

  constructor(private config: ConfigService,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.getSchedule();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule())
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

}
