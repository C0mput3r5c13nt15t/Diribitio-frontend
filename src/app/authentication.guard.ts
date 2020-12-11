import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { ConfigService } from './services/config.service';

/**
 * This guard handles which routes are available and which aren't
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private auth: AuthenticationService,
              private router: Router,
              private config: ConfigService) {}

  /**
   * Contains the logged in state
   */
  isLoggedIn = false;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;
  /**
   * Contains the url to which unauthenticated requests are redirected
   */
  redirectUrl = this.eventName + '/Anmeldung';

  /**
   * Checks if the user is allowed to access the page
   */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin();
  }

  /**
   * Checks if the user is logged in
   */
  checkLogin(): boolean {
    if (this.auth.isLoggedIn) { return true; }

    this.router.navigate([this.eventName + '/Anmeldung']);
    return false;
  }
}

