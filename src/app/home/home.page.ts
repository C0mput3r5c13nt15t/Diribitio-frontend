import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
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

  welcome: any;
  articles = [];

  projectsNoun = 'Projekte';
  eventNoun = 'Projekttage';

  constructor(private config: ConfigService,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.projectsNoun = this.config.app_config.projects_noun;
    this.eventNoun = this.config.app_config.eventname;

    this.welcome = this.config.home.welcome;
    this.articles = this.config.home.articles;

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

}
