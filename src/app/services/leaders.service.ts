import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';
import { Router } from '@angular/router';

/**
 * This service handles all request to the backend having to do with the leaders
 */
@Injectable({
  providedIn: 'root'
})
export class LeadersService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService,
              private router: Router) { }

  /**
   * The url to the backend
   */
  backendUrl = this.config.backend_config.url;
  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  /**
   * Creates a new leader account
   * @param signUpData Contains the credentials for the account creation
   * @param form Contains the form to be resetted after the creation
   */
  signUpLeader(signUpData, form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'leaders/register', signUpData, options).subscribe(data => {
      if (data.token) {
        this.auth.set_jwt(data.token);
        this.auth.setLoggedIn(true);
        this.router.navigate([this.eventName + '/Anmeldung']);
      }
      this.alert.alert('Dein Account wurde erfolgreich erstellt!');
      this.sendAuthentificationEmail();
      this.update.emit();
      form.reset();
    }, error => {
      this.alert.error('Erstellung des Accounts fehlgeschlagen!', error.error);
    });
  }

  /**
   * Sends the authentification email to the leader associated with the provided token
   */
  sendAuthentificationEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'leaders/email/resend', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  /**
   * Sends the authentification email to the leader associated with the provided token (same as before)
   * @returns RequestObservable
   */
  sendAuthentificationEmailSubscribe() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/email/resend', null, options);
  }

  /**
   * Logs in as leader with the given credentials
   * @param loginData Contains the credentials to be used (email and password)
   * @returns RequestObservable
   */
  logInLeader(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/login', loginData, options);
  }

  /**
   * Logs out the leader associated with the provided token
   */
  logOutLeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'leaders/logout', null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Logout fehlgeschlagen!', error.error);
    });
  }

  /**
   * Gets the leader associated with the provided token
   * @returns RequestObservable
   */
  getSelfLeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'leaders/self', options);
  }

  /**
   * Gets all leaders
   * @returns RequestObservable
   */
  getAllLeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/index_leaders', options);
  }

  /**
   * Deletes the leader with the given id
   * @param leaderID Contains the id of the leader to be deleted
   */
  deleteLeader(leaderID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'admins/destroy_leader/' + leaderID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Löschung des ' + this.projectNoun + 'leiters fehlgeschlagen!', error.error);
    });
  }

  /**
   * Deletes the leader associated with the provided token
   */
  destroySelfLeader() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'leaders/self_destroy', options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Löschung ihres Accounts fehlgeschlagen!', error.error);
    });
  }
}
