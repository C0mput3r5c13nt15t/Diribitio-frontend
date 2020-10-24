import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private auth: AuthenticationService,
              private router: Router,
              private config: ConfigService) {}

  isLoggedIn = false;
  eventName = this.config.app_config.event_name;
  redirectUrl = this.eventName + '/Anmeldung';

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.auth.isLoggedIn) { return true; }

    this.router.navigate([this.eventName + '/Anmeldung']);
    return false;
  }
}

