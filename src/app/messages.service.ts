import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/assets/models/Response.model';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService) { }

  backendUrl = this.config.backend_config.url;

  createMessage(baseUrl= 'students', messageData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    return this.http.post<Response>(this.backendUrl + baseUrl + '/store_leaded_project_message', messageData, options);
  }

  deleteMessage(baseUrl= 'students', messageID) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    // tslint:disable-next-line: max-line-length
    return this.http.delete<Response>(this.backendUrl + baseUrl + '/destroy_leaded_project_message/' + messageID, options).subscribe(() => {
      this.update.emit();
    }, error => {
      this.alert.error('Löschung der Nachricht fehlgeschlagen!', error.error);
    });
  }
}
