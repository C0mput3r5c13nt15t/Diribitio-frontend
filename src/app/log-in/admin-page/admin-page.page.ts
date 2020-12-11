import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/services/admins.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { Admin } from 'src/models/Admin.model';
import { ConfigService } from 'src/app/services/config.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AlertService } from 'src/app/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  loadedAdmin: Admin = {
    id: 0,
    user_name: '',
    email: '',
    password: ''
  };

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

  text: string;

  buttonPressed = true;

  projectsNoun = this.config.app_config.projects_noun;
  projectNoun = this.config.app_config.project_noun;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private adminsService: AdminsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) { }

  ngOnInit() {
    this.projectsNoun = this.config.app_config.projects_noun;
    this.projectNoun = this.config.app_config.project_noun;

    this.text = this.config.get_content('admin-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('AdminName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.getSchedule();
    this.getAdmin();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.adminsService.update.subscribe(() => this.getAdmin())
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

  getAdmin() {
    this.adminsService.getSelfAdmin().subscribe(data => {
      this.loadedAdmin = data.data;

      if (this.loadedAdmin.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getAdmin();
    this.getSchedule();
  }

  sendVerificationEmail() {
    this.adminsService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  logout() {
    this.adminsService.logOutAdmin();
  }

}
