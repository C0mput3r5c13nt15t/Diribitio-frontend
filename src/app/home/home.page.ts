import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Schedule } from 'src/assets/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from '../schedule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  private subscriptions: Subscription[] = [];

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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

}
