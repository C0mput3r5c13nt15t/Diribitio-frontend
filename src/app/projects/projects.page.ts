import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';
import { Projekt } from 'src/assets/models/Projekt.model';
import { ConfigService } from '../config.service';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  projects: Projekt[];

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

  projectsNoun = 'Projekte';

  text = '';

  constructor(private projectsService: ProjectsService,
              private config: ConfigService,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.projectsNoun = this.config.app_config.projects_noun;

    this.text = this.config.get_content('projects');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getProjects();

    this.projectsService.update.subscribe(() => {this.getProjects(); });
  }

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.projects = data.data;
    });
  }

}
