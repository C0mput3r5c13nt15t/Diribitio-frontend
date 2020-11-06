import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { Projectleader } from 'src/assets/models/Projectleader';
import { Project } from 'src/assets/models/Project.model';
import { ConfigService } from 'src/app/config.service';
import { ScheduleService } from 'src/app/schedule.service';
import { Schedule } from 'src/assets/models/Schedule.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-project-administration',
  templateUrl: './project-administration.page.html',
  styleUrls: ['./project-administration.page.scss'],
})
export class ProjectAdministrationPage implements OnInit {
  leaderUrl: string;

  loadedLeader: Projectleader = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0,
  };

  leadedProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
    leader_id: 0,
    cost: 0,
    first_day_begin: {
      hours: 0,
      minutes: 0,
    },
    first_day_end: {
      hours: 0,
      minutes: 0,
    },
    second_day_begin: {
      hours: 0,
      minutes: 0,
    },
    second_day_end: {
      hours: 0,
      minutes: 0,
    },
    min_grade: 0,
    max_grade: 0,
    min_participants: 0,
    max_participants: 0,
    messages: [],
    participants: []
  };

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

  leaderLoadingProject: string;
  leaderWrongTime: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService,
              private projectsService: ProjectsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.leaderLoadingProject = this.config.get_error('leader-loading_project');
    this.leaderWrongTime = this.config.get_error('leader-wrong_time');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
      this.leaderUrl = paramMap.get('LeaderName');
    });
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getProject();
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

}
