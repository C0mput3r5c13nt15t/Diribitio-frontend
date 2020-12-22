import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { StudentsService } from 'src/app/services/students.service';
import { LeadersService } from 'src/app/services/leaders.service';
import { AdminsService } from 'src/app/services/admins.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { AlertService } from 'src/app/services/alert.service';
import { ConfigService } from 'src/app/services/config.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /**
   * Conatins the which form should be shown on the log-in page
   */
  formType = 'student';

  StudentCredentials = {
    email: '',
    password: '',
  };

  LeaderCredentials = {
    email: '',
    password: '',
  };

  AdminCredentials = {
    email: '',
    password: '',
  };

  /**
   * Conatins the number of times a log-in has been tried
   */
  tries = 0;

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

  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private auth: AuthenticationService,
              private router: Router,
              private studentsService: StudentsService,
              private scheduleService: ScheduleService,
              private leadersService: LeadersService,
              private adminsService: AdminsService,
              private alert: AlertService,
              private config: ConfigService,
              private cookieService: CookieService) {}

  ngOnInit() {
    this.currentDate = this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.getSchedule();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule())
    );
  }

  ionViewWillEnter() {
    this.log_in_from_storage();
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

  keyPressEventHandler(keyCode, type= 'students', form) {
    if (keyCode === 13) {
      if (type === 'students') {
        this.LogInStudent(form);
      } else if (type === 'leaders') {
        this.LogInLeader(form);
      } else if (type === 'admins') {
        this.LogInAdmin(form);
      }
    }
  }

  /**
   * Sets the focus on the given element if ENTER is pressed
   * @param keyCode Contains the code of the pressed key
   * @param nextInput Contains the next element to be focused
   */
  nextInput(keyCode, nextInput) {
    if (keyCode === 13) {
      nextInput.setFocus();
    }
  }

  log_in_from_storage() {
    if (this.cookieService.get('Diribitio-Session')) {
      const jwt = this.cookieService.get('Diribitio-Session');
      this.auth.check_jwt(jwt).subscribe(data => {
        const userAuth = data.auth;

        this.auth.set_jwt(data.token);
        this.auth.setLoggedIn(true);

        if (userAuth === 'admins') {
          this.router.navigate([this.eventName + '/Admin/' + data.user_name]);
        } else if (userAuth === 'leaders') {
          this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + data.user_name]);
        } else if (userAuth === 'students') {
          this.router.navigate([this.eventName + '/Schüler/' + data.user_name]);
        }
      }, (error) => {
        this.alert.error('Die Sitzung ist bereits abgelaufen!', error);
        this.auth.setLoggedIn(false);
      });
    }
  }

  LogInStudent(form) {
    this.studentsService.logInStudent(this.StudentCredentials).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate([this.eventName + '/Schüler/' + data.user_name]);
        this.auth.setLoggedIn(true);
        form.reset();
      }
    }, error => {
      this.alert.error('Anmeldung fehlgeschlagen!', error.error);
      this.wrongPassword();
    });
  }

  LogInLeader(form) {
    this.leadersService.logInLeader(this.LeaderCredentials).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + data.user_name]);
        this.auth.setLoggedIn(true);
        form.reset();
      }
    }, error => {
      this.alert.error('Anmeldung fehlgeschlagen!', error.error);
      this.wrongPassword();
    });
  }

  LogInAdmin(form) {
    this.adminsService.logInAdmin(this.AdminCredentials).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate([this.eventName + '/Admin/' + data.user_name]);
        this.auth.setLoggedIn(true);
        form.reset();
      }
    }, error => {
      this.alert.error('Anmeldung fehlgeschlagen!', error.error);
      this.wrongPassword();
    });
  }

  wrongPassword() {
    this.tries += 1;

    if (this.tries >= 5) {
      this.alert.wrongPassword(this.tries * 3000, this.tries);
    }
  }

}
