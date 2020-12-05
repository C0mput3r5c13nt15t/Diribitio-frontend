
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private LoggedIn = false;
  private JWT = '';

  constructor(private http: HttpClient,
              private router: Router,
              private config: ConfigService,
              private alert: AlertService) {}

  backendUrl = this.config.backend_config.url;
  eventName = this.config.app_config.event_name;

  get jwt() {
    return this.JWT;
  }

  set_jwt(Jwt) {
    this.JWT = Jwt;
    localStorage.setItem('jwt', this.jwt);
  }

  async async_set_jwt(Jwt) {
    this.JWT = Jwt;
    localStorage.setItem('jwt', this.jwt);
  }

  get isLoggedIn() {
    return this.LoggedIn;
  }

  setLoggedIn(value) {
    this.LoggedIn = value;

    if (value === false) {
      localStorage.removeItem('jwt');
    }
  }

  check_jwt(jwt) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'auth/refresh', null, options);
  }

  forgotPassword(forgotPasswordData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.JWT,
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(data => {
      this.alert.alert(data.message);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
    });
  }

  resetPassword(resetPasswordData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'auth/password/reset', resetPasswordData, options);
  }

}
