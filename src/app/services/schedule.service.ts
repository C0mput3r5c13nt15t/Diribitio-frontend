import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';

/**
 * This service handles all request to the backend having to do with the shedule
 */
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private config: ConfigService) { }

  /**
   * The url to the backend
   */
  backendUrl = this.config.backend_config.url;

  /**
   * Gets the current schedule
   * @returns RequestObservable
   */
  getSchedule() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'schedule/1', options);
  }

  /**
   * Updates the current schedule
   * @param schedule Contains the new schedule
   * @returns RequestObservable
   */
  putSchedule(schedule) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });

    const options = { headers };
    return this.http.put<Response>(this.backendUrl + 'admins/update_schedule', schedule, options);
  }
}
