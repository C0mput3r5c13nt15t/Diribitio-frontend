import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { StudentsService } from '../students.service';
import { LeadersService } from '../leaders.service';
import { AdminsService } from '../admins.service';
import { Schedule } from 'src/assets/models/Schedule.model';
import { formatDate } from '@angular/common';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ScheduleService } from '../schedule.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  private subscriptions: Subscription[] = [];

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

  tries = 0;

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

  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private auth: AuthenticationService,
              private router: Router,
              private studentsService: StudentsService,
              private scheduleService: ScheduleService,
              private leadersService: LeadersService,
              private adminsService: AdminsService,
              private alert: AlertService,
              private config: ConfigService) {}

  ngOnInit() {
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.getSchedule();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule())
    );
  }

  ionViewWillEnter() {
    this.log_in_from_storage();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

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

  nextInput(keyCode, nextInput) {
    if (keyCode === 13) {
      nextInput.setFocus();
    }
  }

  log_in_from_storage() {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');
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
