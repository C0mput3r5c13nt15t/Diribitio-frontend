import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { AlertService } from './alert.service';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';

/**
 * This service handles all request to the backend having to do with the exchanges
 */
@Injectable({
  providedIn: 'root'
})
export class ExchangesService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  constructor(private http: HttpClient,
              private auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService) { }

  /**
   * The url to the backend
   */
  backendUrl = this.config.backend_config.url;

  /**
   * Gets all exchange requests for the student associated with the provided toke
   * @returns Requestobservable
   */
  getAllExchangesForParticipant() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'students/exchange_requests', options);
  }

  /**
   * Gets all exchanges
   * @returns Requestobservable
   */
  getAllexchanges() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/index_exchanges', options);
  }

  /**
   * Gets the exchage with the given id
   * @param exchangeID Contains the id of the exchange
   * @returns RequestObservable
   */
  getExchange(exchangeID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.get<Response>(this.backendUrl + 'admins/exchange/' + exchangeID, options);
  }

  /**
   * Confirms the exchage with the given id
   * @param exchangeID Contains the id of the exchange
   * @returns RequestObservable
   */
  confirmExchange(exchangeID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.put<Response>(this.backendUrl + 'students/confirm_exchange/' + exchangeID, null, options);
  }

  /**
   * Carries out the exchage with the given id
   * @param exchangeID Contains the id of the exchange
   */
  carryOutExchange(exchangeID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.put<Response>(this.backendUrl + 'admins/accomplish_exchange/' + exchangeID, null, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Durchführung des Tausches fehlgeschlagen!', error.error);
    });
  }

  /**
   * Creates an exchage request to the student with the given id
   * @param receiverID Contains the id of the recieving student
   * @returns RequestObservable
   */
  createExchange(receiverID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    const sendData = {
      receiver_id: receiverID
    };
    return this.http.post<Response>(this.backendUrl + 'students/store_exchange', sendData, options);
  }

  /**
   * Deletes the current exchange of the student associated with the provided toke
   * @returns RequestObservable
   */
  deleteSelfExchange() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    return this.http.delete<Response>(this.backendUrl + 'students/destroy_exchange', options);
  }

  /**
   * Deletes the exchage with the given id
   * @param exchangeID Contains the id of the exchage
   */
  deleteExchange(exchangeID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.auth.jwt,
    });
    const options = { headers };
    this.http.delete<Response>(this.backendUrl + 'admins/destroy_exchange/' + exchangeID, options).subscribe(data => {
      this.alert.alert(data.message);
      this.update.emit();
    }, error => {
      this.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
    });
  }

}
