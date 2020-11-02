import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  formType = 'student';

  resetPasswordStudent = {
    token: '',
    email: '',
    user_type: 'students',
    password: '',
    password_confirmation: ''
  };

  resetPasswordLeader = {
    token: '',
    email: '',
    user_type: 'leaders',
    password: '',
    password_confirmation: ''
  };

  resetPasswordAdmin = {
    token: '',
    email: '',
    user_type: 'admins',
    password: '',
    password_confirmation: ''
  };

  text: string;

  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private config: ConfigService,
              private auth: AuthenticationService,
              private alert: AlertService) { }

  ngOnInit() {
    this.text = this.config.get_content('reset-password');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (paramMap.has('ResetToken')) {
        this.resetPasswordAdmin.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
        this.resetPasswordLeader.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
        this.resetPasswordStudent.token = this.activatedRoute.snapshot.paramMap.get('ResetToken');
      } else {
        this.router.navigate([this.eventName + '/Anmeldung']);
      }
    });
  }

  eventHandler(keyCode, type= 'students', form) {
    if (keyCode === 13) {
      if (type === 'students') {
        this.resetStudentPassword(form);
      } else if (type === 'leaders') {
        this.resetLeaderPassword(form);
      } else if (type === 'admins') {
        this.resetAdminPassword(form);
      }
    }
  }

  nextInput(keyCode, nextInput) {
    if (keyCode === 13) {
      nextInput.setFocus();
    }
  }

  resetStudentPassword(form) {
    this.auth.resetPassword(this.resetPasswordStudent).subscribe(data => {
      this.alert.alert(data.message);
      form.reset();
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
    });
  }

  resetLeaderPassword(form) {
    this.auth.resetPassword(this.resetPasswordLeader).subscribe(data => {
      this.alert.alert(data.message);
      form.reset();
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
    });
  }

  resetAdminPassword(form) {
    this.auth.resetPassword(this.resetPasswordAdmin).subscribe(data => {
      this.alert.alert(data.message);
      form.reset();
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Zurücksetzen des Passworts fehlgeschalgen!', error.error);
    });
  }

}
