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
export class AdminsService {
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService,
              private router: Router) { }

  backendUrl = this.config.backend_config.url;
  eventName = this.config.app_config.event_name;

  /**
   * @description Creates a new admin account
   * @param signUpData Contains the credentials for the account creation
   * @param form Contains the form to be resetted after the creation
   */
  signUpAdmin(signUpData, form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/register', signUpData, options).subscribe(data => {
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
   * @description Sends the authentification email to the admin associated with the provided token
   */
  sendAuthentificationEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/email/resend', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Sends the authentification email to the admin associated with the provided token (same as before)
   * @returns RequestObservable
   */
  sendAuthentificationEmailSubscribe() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/email/resend', null, options);
  }

  /**
   * @description Logs in as admin with the given credentials
   * @param loginData Contains the credentials to be used (email and password)
   * @returns RequestObservable
   */
  logInAdmin(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/login', loginData, options);
  }

  /**
   * @description Logs out the admin associated with the provided token
   */
  logOutAdmin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/logout', null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Logout fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Gets the admin associated with the provided token
   * @returns RequestObservable
   */
  getSelfAdmin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/self', options);
  }

  /**
   * @description Gets all emails that are allowed for the creation of admin accounts
   * @returns RequestObservable
   */
  getAllSignUpEmails() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'sign_up_emails', options);
  }

  /**
   * @description Authorizes a new email to be used for the creation of an admin account
   * @param emailData Contains the email to be authorized
   * @returns RequestObservable
   */
  createSignUpEmail(emailData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'sign_up_emails', emailData, options);
  }

  /**
   * @description Forbids the furter use of an email that was previously allowed for the creation of an admin account
   * @param emailID Contains the id of the email to be forbidden
   */
  deleteSignUpEmail(emailID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Sperrung der E-Mail fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Creates a sorting proposal
   * @returns RequestObservable
   */
  createSortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/create_sorting_proposal', null, options);
  }

  /**
   * @description Gets the current sorting proposal
   * @returns RequestObservable
   */
  requestSortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/request_sorting_proposal', options);
  }

  /**
   * @description Updates the current sorting proposal
   * @returns RequestObservable
   */
  editSortingProposal(sortingProposal) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/edit_sorting_proposal', sortingProposal, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Applies the current sorting proposal to the actual database
   * @returns MessageString
   */
  applySortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Anwendung des Sortiervorschlags fehlgeschlagen!', error.error);
    });
  }

}
