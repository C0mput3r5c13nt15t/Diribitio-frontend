import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/assets/models/Response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService,
              private router: Router) { }

  backendUrl = this.config.backend_config.url;

  signUpLeader(signUpData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'leaders/register', signUpData, options).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.auth.setLoggedIn(true);
        this.router.navigate(['Projekttage/Anmeldung']);
      }
      this.alert.alert('Dein Account wurde erfolgreich erstellt!');
      this.sendAuthentificationEmail();
      this.update.emit();
    }, error => {
      this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
    });
  }

  sendAuthentificationEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'leaders/email/resend', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
    });
  }

  sendAuthentificationEmailSubscribe() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/email/resend', null, options);
  }

  logInLeader(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/login', loginData, options);
  }

  logOutLeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/logout', null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate(['Projekttage/Anmeldung']);
    }, error => {
      this.alert.error('Logout fehlgeschlagen!', error.error);
    });
  }

  getSelfLeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    return this.http.get<Response>(this.backendUrl + 'leaders/self', options);
  }

  getAllLeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/index_leaders', options);
  }

  deleteLeader(LeaderID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    this.http.delete<Response>(this.backendUrl + 'admins/destroy_leader/' + LeaderID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Löschung des Projektleiters fehlgeschlagen!', error.error);
    });
  }
}
