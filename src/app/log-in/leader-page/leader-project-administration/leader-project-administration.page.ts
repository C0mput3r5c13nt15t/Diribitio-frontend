import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projectleader } from 'src/models/Projectleader';
import { Project } from 'src/models/Project.model';
import { ConfigService } from 'src/app/services/config.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-administration',
  templateUrl: './leader-project-administration.page.html',
  styleUrls: ['./leader-project-administration.page.scss'],
})
export class LeaderProjectAdministrationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

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

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    control: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    registration: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    sort_students: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    exchange: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    projects: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    end: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
  };
  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  leaderLoadingProject: string;
  leaderWrongTime: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService,
              private projectsService: ProjectsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.leaderLoadingProject = this.config.get_error('leader-loading_project');
    this.leaderWrongTime = this.config.get_error('leader-wrong_time');

    this.currentDate = formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');

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

    this.subscriptions.push(
      this.projectsService.update.subscribe(() => this.getProject()),
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

}
