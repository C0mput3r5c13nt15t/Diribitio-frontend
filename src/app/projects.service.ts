import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/assets/models/Response.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  @Output() update = new EventEmitter();
  Data;

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService,
              private router: Router) { }

  backendUrl = this.config.backend_config.url;

  getAllProjects() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects', options);
  }

  getProject(projectID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects/' + projectID, options);
  }

  getLittleProject(projectID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'projects/show_little/' + projectID, options);
  }

  getProjectAdmin(projectID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/project/' + projectID, options);
  }

  getSelfProject() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'students/project', options);
  }

  getSelfLeadedProject(baseUrl= 'students') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + baseUrl + '/leaded_project', options);
  }

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

  toogleAuthorizedProject(projectID, authorized) {
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

  toogleEditableProject(projectID, editable) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      editable
    };
    return this.http.put<Response>(this.backendUrl + 'admins/toogle_editable/' + projectID, sendData, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  putProject(baseUrl= 'students', projectData, backUrl) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };

    this.http.put<Response>(this.backendUrl + baseUrl + '/update_project', projectData, options).subscribe(data => {
      this.alert.alert(data.message);

      if (baseUrl === 'students') {
        this.router.navigate(['Projekttage/Benutzer/' + backUrl]);
      } else {
        this.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
      }

      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  touchUpProject(baseUrl= 'students', projectData, backUrl) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };

    this.http.put<Response>(this.backendUrl + baseUrl + '/touch_up_project', projectData, options).subscribe(data => {
      this.alert.alert(data.message);

      if (baseUrl === 'students') {
        this.router.navigate(['Projekttage/Benutzer/' + backUrl]);
      } else {
        this.router.navigate(['Projekttage/Projektleiter/' + backUrl]);
      }

      this.update.emit();
    }, error => {
      this.alert.error('Aktualisierung des Projektes fehlgeschlagen!', error.error);
    });
  }

  deleteProject(projectID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'admins/destroy_project/' + projectID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Löschen des Projektes fehlgeschlagen!', error.error);
    });
  }
}
