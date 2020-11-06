import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../../projects.service';
import { Project } from 'src/assets/models/Project.model';
import { ConfigService } from '../../../config.service';
import { Schedule } from 'src/assets/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from '../../../schedule.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  studentUrl: string;
  projects: Project[];

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

  imageUrl = this.config.backend_config.imageUrl;
  projectsNoun = this.config.app_config.projects_noun;
  eventName = this.config.app_config.event_name;

  text: string;

  constructor(private projectsService: ProjectsService,
              private config: ConfigService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.text = this.config.get_content('projects');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });

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
