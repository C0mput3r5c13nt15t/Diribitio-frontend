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

  // Request having to do with the Admin itself

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
      this.alert.error('Accounterstellung fehlgeschlagen!', error.error);
    });
  }

  sendAuthentificationEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/email/resend', null, options).subscribe(data => {
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
    return this.http.post<Response>(this.backendUrl + 'admins/email/resend', null, options);
  }

  logInAdmin(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/login', loginData, options);
  }

  logOutAdmin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/logout', null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Logout fehlgeschlagen!', error.error);
    });
  }

  getSelfAdmin() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/self', options);
  }

  getAdmin(adminID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/' + adminID, options);
  }

  // Request having to do with the signUp Tokens for Students

  getAllTokens() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'sign_up_tokens', options);
  }

  createTokens(count) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      count
    };
    return this.http.post<Response>(this.backendUrl + 'sign_up_tokens', sendData, options);
  }

  deleteAllTokens() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.delete<Response>(this.backendUrl + 'sign_up_tokens', options);
  }

  // Request having to do with the SignUpEmails

  getAllSignUpEmails() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'sign_up_emails', options);
  }

  createSignUpEmail(emailData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'sign_up_emails', emailData, options);
  }

  deleteSignUpEmail(emailID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.delete<Response>(this.backendUrl + 'sign_up_emails/' + emailID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Entfernen der E-mail fehlgeschlagen!', error.error);
    });
  }

  // Request having to do with the Sorting of the Studnets

  createSortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'admins/create_sorting_proposal', null, options);
  }

  requestSortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/request_sorting_proposal', options);
  }

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

  applySortingProposal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'admins/apply_sorting_proposal', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Erstellung eines Backups fehlgeschlagen!', error.error);
    });
  }

}
