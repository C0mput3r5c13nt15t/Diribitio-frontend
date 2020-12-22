import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadersService } from 'src/app/services/leaders.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { Projectleader } from 'src/models/Projectleader';
import { ConfigService } from 'src/app/services/config.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AlertService } from 'src/app/services/alert.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leader-page',
  templateUrl: './leader-page.page.html',
  styleUrls: ['./leader-page.page.scss'],
})
export class LeaderPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  loadedLeader: Projectleader = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0
  };

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

  text: string;

  buttonPressed = true;

  projectNoun = this.config.app_config.project_noun;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private leadersService: LeadersService,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) { }

  ngOnInit() {
    this.text = this.config.get_content('leader-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.getSchedule();
    this.getLeader();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.leadersService.update.subscribe(() => this.getLeader()),
      this.projectsService.update.subscribe(() => this.getLeader())
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

  getLeader() {
    this.leadersService.getSelfLeader().subscribe(data => {
      this.loadedLeader = data.data;

      if (this.loadedLeader.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getLeader();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  sendVerificationEmail() {
    this.leadersService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  logout() {
    this.leadersService.logOutLeader();
  }

  deleteAccount() {
    this.leadersService.destroySelfLeader();
  }

}
