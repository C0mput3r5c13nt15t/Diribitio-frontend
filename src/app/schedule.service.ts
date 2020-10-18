import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ConfigService } from './config.service';
import { Response } from 'src/assets/models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private config: ConfigService) { }

  backendUrl = this.config.backend_config.url;

  getSchedule() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'schedule/1', options);
  }

  putSchedule(schedule) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.put<Response>(this.backendUrl + 'admins/update_schedule', schedule, options);
  }
}
