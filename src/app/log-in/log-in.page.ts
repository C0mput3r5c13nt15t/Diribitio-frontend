import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { ParticipantsService } from '../participants.service';
import { LeadersService } from '../leaders.service';
import { AdminsService } from '../admins.service';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
  formType = 'student';

  Student = {
    email: 'kirsten.koepp@example.net',
    password: 'Passwort',
  };

  Leader = {
    email: 'freda60@example.net',
    password: 'Passwort',
  };

  Admin = {
    email: 'pauljustus27@gmail.com',
    password: 'Passwort',
  };

  tries = 0;

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

  projectNoun: string;

  constructor(private auth: AuthenticationService,
              private router: Router,
              private participantsService: ParticipantsService,
              private scheduleService: ScheduleService,
              private leadersService: LeadersService,
              private adminsService: AdminsService,
              private alert: AlertService,
              private config: ConfigService) {}

  ngOnInit() {
    this.projectNoun = this.config.app_config.project_noun;

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  ionViewWillEnter() {
    this.log_in_from_storage();
  }

  eventHandler(keyCode, type= 'students', form) {
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
          this.router.navigate(['Projekttage/Admin/' + data.user_name]);
        } else if (userAuth === 'leaders') {
          this.router.navigate(['Projekttage/Projektleiter/' + data.user_name]);
        } else if (userAuth === 'students') {
          this.router.navigate(['Projekttage/Benutzer/' + data.user_name]);
        }
      }, (error) => {
        this.alert.error('Die Sitzung ist bereits abgelaufen!', error);
        this.auth.setLoggedIn(false);
      });
    }
  }

  LogInStudent(form) {
    this.participantsService.logInParticipant(this.Student).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate(['Projekttage/Benutzer/' + data.user_name]);
        this.auth.setLoggedIn(true);
        form.reset();
      }
    }, error => {
      this.alert.error('Anmeldung fehlgeschlagen!', error.error);
      this.wrongPassword();
    });
  }

  LogInLeader(form) {
    this.leadersService.logInLeader(this.Leader).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate(['Projekttage/Projektleiter/' + data.user_name]);
        this.auth.setLoggedIn(true);
        form.reset();
      }
    }, error => {
      this.alert.error('Anmeldung fehlgeschlagen!', error.error);
      this.wrongPassword();
    });
  }

  LogInAdmin(form) {
    this.adminsService.logInAdmin(this.Admin).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.router.navigate(['Projekttage/Admin/' + data.user_name]);
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
