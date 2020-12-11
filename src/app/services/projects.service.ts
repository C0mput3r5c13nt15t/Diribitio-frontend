import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';
import { Router } from '@angular/router';

/**
 * This service handles all request to the backend having to do with the projects
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();
  Data;

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
   * Gets all projects
   * @returns RequestObservable
   */
  getAllProjects() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects', options);
  }

  /**
   * Gets the project with the given id
   * @param projectID Contains the id of the project
   * @returns RequestObservable
   */
  getProject(projectID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects/' + projectID, options);
  }

  /**
   * Gets some of the project data with the given id
   * @param projectID Contains the id of the project
   * @returns RequestObservable
   */
  getLittleProject(projectID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects/show_little/' + projectID, options);
  }

  /**
   * Gets the project data available to an admin with the given id
   * @param projectID Contains the id of the project
   * @returns RequestObservable
   */
  getProjectAdmin(projectID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/project/' + projectID, options);
  }

  /**
   * Gets the project of the student associated with the provided token
   * @returns RequestObservable
   */
  getSelfProject() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'students/project', options);
  }

  /**
   * Gets the leaded project of the student or leader associated with the provided token
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @returns RequestObservable
   */
  getSelfLeadedProject(baseUrl= 'students') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + baseUrl + '/leaded_project', options);
  }

  /**
   * Creates a new project
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @param projectData Contains the new project
   * @param image Contains the image of the new project
   * @returns RequestObservable
   */
  createProject(baseUrl= 'students', projectData, image= null) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };

    const formData = new FormData();
    formData.append('title', projectData.title);
    formData.append('image', image);
    formData.append('descr', projectData.descr);
    formData.append('leader_name', projectData.leader_name);
    formData.append('cost', projectData.cost);
    formData.append('first_day_begin', projectData.first_day_begin);
    formData.append('first_day_end', projectData.first_day_end);
    formData.append('second_day_begin', projectData.second_day_begin);
    formData.append('second_day_end', projectData.second_day_end);
    formData.append('min_grade', projectData.min_grade);
    formData.append('max_grade', projectData.max_grade);
    formData.append('min_participants', projectData.min_participants);
    formData.append('max_participants', projectData.max_participants);

    return this.http.post<Response>(this.backendUrl + baseUrl + '/store_project', formData, options);
  }

  /**
   * Updates the authorization of the project with the given id
   * @param projectID Contains the id of the project to be un-/auhorized
   * @param authorized Contains the new value for authorized
   */
  toogleAuthorizedProject(projectID: number, authorized: boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      authorized
    };
    this.http.put<Response>(this.backendUrl + 'admins/toogle_authorized/' + projectID, sendData, options).subscribe(data => {
      if (data) {
        this.alert.alert(data.message);
      }
      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  /**
   * Updates the editability of the project with the given id
   * @param projectID Contains the id of the project to be un-/editable
   * @param editable Contains the new value for editable
   */
  toogleEditableProject(projectID: number, editable: boolean) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      editable
    };
    this.http.put<Response>(this.backendUrl + 'admins/toogle_editable/' + projectID, sendData, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  /**
   * Updates the project of the student/leader associated with the provided token
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @param projectData Contains the new project data
   * @param backUrl Contains the url that the user should be navigated to after a successful update
   */
  putProject(baseUrl= 'students', projectData, backUrl: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };

    this.http.put<Response>(this.backendUrl + baseUrl + '/update_project', projectData, options).subscribe(data => {
      this.alert.alert(data.message);

      if (baseUrl === 'students') {
        this.router.navigate([this.eventName + '/Schüler/' + backUrl]);
      } else {
        this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + backUrl]);
      }

      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  /**
   * Updates the project of the student/leader associated with the provided token even after the actual
   *              deadline if ediatble allows it
   * @param baseUrl Contains for which type of user accout this request is (students or leaders)
   * @param projectData Contains the new project data
   * @param backUrl Contains the url that the user should be navigated to after a successful update
   */
  touchUpProject(baseUrl= 'students', projectData, backUrl) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };

    this.http.put<Response>(this.backendUrl + baseUrl + '/touch_up_project', projectData, options).subscribe(data => {
      this.alert.alert(data.message);

      if (baseUrl === 'students') {
        this.router.navigate([this.eventName + '/Schüler/' + backUrl]);
      } else {
        this.router.navigate([this.eventName + '/' + this.projectNoun + 'leiter/' + backUrl]);
      }

      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  /**
   * Deletes the project with the given id
   * @param projectID Contains the id of the project to be deleted
   */
  deleteProject(projectID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'admins/destroy_project/' + projectID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Löschung des Projektes fehlgeschlagen!', error.error);
    });
  }
}
