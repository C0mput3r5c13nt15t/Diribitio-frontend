import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/models/Project.model';
import { ConfigService } from 'src/app/services/config.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  studentUrl: string;
  projects: Project[];

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    control: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    registration: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    sort_students: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    exchange: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    projects: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
    end: formatDate(new Date(), 'yyyy-MM-dd', 'en')
  };

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  imageUrl = this.config.backend_config.imageUrl;
  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  text: string;

  constructor(private projectsService: ProjectsService,
              private config: ConfigService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.text = this.config.get_content('student-projects');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.getSchedule();
    this.getProjects();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.projectsService.update.subscribe(() => this.getProjects())
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

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.projects = data.data;
    });
  }

}
