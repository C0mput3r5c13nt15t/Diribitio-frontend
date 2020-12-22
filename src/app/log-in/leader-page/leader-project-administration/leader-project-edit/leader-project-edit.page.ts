import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { Projectleader } from 'src/models/Projectleader';
import { Project } from 'src/models/Project.model';
import { ConfigService } from 'src/app/services/config.service';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Schedule } from 'src/models/Schedule.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-edit',
  templateUrl: './leader-project-edit.page.html',
  styleUrls: ['./leader-project-edit.page.scss'],
})
export class LeaderProjectEditPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  leaderUrl: string;

  loadedLeader: Projectleader = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0,
  };

  editProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: null,
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

  image: any;

  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService ) { }

  ngOnInit() {
    this.currentDate = formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
      this.leaderUrl = paramMap.get('LeaderName');
    });

    this.getSchedule();
    this.getProject();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.projectsService.update.subscribe(() => this.getProject()),
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

  getProject() {
    this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
      this.editProject = data.data;
    });
  }

  changeFile(event) {
    const file = event.target.files[0];

    if (file) {
      this.image = file;
    }
  }

  submit() {
    if (this.currentDate > this.schedule.control && this.currentDate <= this.schedule.registration) {
      this.projectsService.touchUpProject('leaders', this.editProject, this.leaderUrl);
    } else {
      this.projectsService.putProject('leaders', this.editProject, this.leaderUrl);
    }
  }

}
