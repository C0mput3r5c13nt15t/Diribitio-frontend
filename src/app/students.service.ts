import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService,
              private router: Router) {}

  backendUrl = this.config.backend_config.url;
  eventName = this.config.app_config.event_name;

  /**
   * @description Creates a new student account
   * @param signUpData Contains the credentials for the account creation
   * @param form Contains the form to be resetted after the creation
   */
  signUpStudent(signUpData, form) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'students/register', signUpData, options).subscribe(data => {
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
   * @description Sends the authentification email to the student associated with the provided token
   */
  sendAuthentificationEmail() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'students/email/resend', null, options).subscribe(data => {
      this.alert.alert(data.message);
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Sends the authentification email to the student associated with the provided token (same as before)
   * @returns RequestObservable
   */
  sendAuthentificationEmailSubscribe() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'students/email/resend', null, options);
  }

  /**
   * @description Logs in as student with the given credentials
   * @param loginData Contains the credentials to be used (email and password)
   * @returns RequestObservable
   */
  logInStudent(loginData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'students/login', loginData, options);
  }

  /**
   * @description Logs out the student associated with the provided token
   */
  logOutStudent() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'students/logout', null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.auth.setLoggedIn(false);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Logout fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Gets the student associated with the provided token
   * @returns RequestObservable
   */
  getSelfStudent() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'students/self', options);
  }

  /**
   * @description Gets the id of an given student
   * @param studentData Contains the student
   * @returns RequestObservable
   */
  getStudentID(studentData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'students/id', studentData, options);
  }

  /**
   * @description Gets all names of all students
   * @returns RequestObservable
   */
  getAllStudentNames() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/little_index_students', options);
  }

  /**
   * @description Gets all students
   * @returns RequestObservable
   */
  getAllStudents(page) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/index_students?page=' + page, options);
  }

  /**
   * @description Gets all students that are relevant for the search
   * @param searchValue Contains a string value of the search
   * @returns RequestObservable
   */
  getAllSearchedStudents(searchValue) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      search_value: searchValue
    };
    return this.http.post<Response>(this.backendUrl + 'admins/search_index_students', sendData, options);
  }

  /**
   * @description Gets all friends of the student associated with the provided token
   * @returns RequestObservable
   */
  getFriends() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'students/friends', options);
  }

  /**
   * @description Makes the student with the given id a assistant leader in the project of the student associated
   *              with the provided token
   * @param studentID Contains the id of the student to be promoted
   */
  promoteStudent(studentID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.put<Response>(this.backendUrl + 'students/promote_student/' + studentID, null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Ernennung des Assistenten fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Suspends the assistent leader with the given id as assistant leader in the project of the student
   *              associated with the provided token
   * @param assistentID Contains the id of the assistent leader to be suspended
   */
  suspendStudent(assistentID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.put<Response>(this.backendUrl + 'students/suspend_student/' + assistentID, null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Suspendierung des Assistenten fehlgeschlagen!', error.error);
    });
  }

  /**
   * @description Removes the assistant leader role of the student associated with the provided token
   * @returns RequestObservable
   */
  quitAssistant() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.put<Response>(this.backendUrl + 'students/quit_assistant', null, options);
  }

  /**
   * @description Updates the student associated with the provided token
   * @param studentData Contains the updated student
   */
  putSelfStudent(studentData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    this.http.put<Response>(this.backendUrl + 'students/self_update', studentData, options).subscribe(() => {
      this.alert.alert('Der Account wurde erfolgreich aktualisiert!');
      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Accounts fehlgeschlagen!', error.error);
    });
  }

}
