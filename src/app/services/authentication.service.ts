
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Response } from 'src/models/Response.model';
import { AlertService } from './alert.service';
import { Router } from '@angular/router';

/**
 * This service handles all everything having to do with the authentification especially the management of the jwt
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  /**
   * Contains the logged in state
   */
  private loggedIn = false;
  /**
   * Contains the active jwt
   */
  private JWT = '';

  constructor(private http: HttpClient,
              private router: Router,
              private config: ConfigService,
              private alert: AlertService) {}

  /**
   * The url to the backend
   */
  backendUrl = this.config.backend_config.url;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  /**
   * Gets the current jwt
   * @returns jwt
   */
  get jwt() {
    return this.JWT;
  }

  /**
   * Sets the current jwt and saves it to locale storage
   * @param jwt Contains the jwt to be set
   */
  set_jwt(jwt: string) {
    this.JWT = jwt;
    localStorage.setItem('jwt', this.jwt);
  }

  /**
   * Asynchronously sets the current jwtand saves it to locale storage
   * @param jwt Contains the jwt to be set
   */
  async async_set_jwt(jwt: string) {
    this.JWT = jwt;
    localStorage.setItem('jwt', this.jwt);
  }

  /**
   * Returns whether the user is logged in or not
   * @returns boolean
   */
  get isLoggedIn() {
    return this.loggedIn;
  }

  /**
   * Sets loggedIn to the new state and if the new state is false removes the jwt from storage
   * @param newState Contains the new logged in state
   */
  setLoggedIn(newState: boolean) {
    this.loggedIn = newState;

    if (newState === false) {
      localStorage.removeItem('jwt');
    }
  }

  /**
   * Checks if the given jwt is still valid and if it is refreshes it
   * @param jwt Contains the jwt to be checked
   * @returns RequestObservable
   */
  check_jwt(jwt) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + jwt,
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'auth/refresh', null, options);
  }

  /**
   * Sends a password reset email to the user with the given email
   * @param forgotPasswordData Contains the email of the user
   */
  forgotPassword(forgotPasswordData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.JWT,
    });

    const options = { headers };
    this.http.post<Response>(this.backendUrl + 'auth/password/email', forgotPasswordData, options).subscribe(data => {
      this.alert.alert(data.message);
      this.router.navigate([this.eventName + '/Anmeldung']);
    }, error => {
      this.alert.error('Die E-Mail konnte nicht versandt werden.', error.error);
    });
  }

  /**
   * Resets the user password
   * @param resetPasswordData Contains the email and the new password of the user
   * @returns RequestObservable
   */
  resetPassword(resetPasswordData) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = { headers };
    return this.http.post<Response>(this.backendUrl + 'auth/password/reset', resetPasswordData, options);
  }

}
