import { Component, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { ScreensizeService } from '../screensize.service';
import { AlertService } from '../alert.service';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean;

  errors = [];
  alerts = [];

  projectsNoun = this.config.app_config.projects_noun;
  eventName = this.config.app_config.event_name;

  constructor(private screensizeService: ScreensizeService,
              public auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
    this.alert.update.subscribe(() => this.getAlertsAndErrors());
  }

  getAlertsAndErrors() {
    this.alerts = this.alert.alerts;
    this.errors = this.alert.errors;
  }

  fadeOutAlert(errorID) {
    const element = document.getElementById(errorID.toString());
    element.classList.add('animate__fadeOutLeft');
    element.onanimationend = () => {
      this.delete_alert(errorID);
    };
  }

  delete_alert(alertID) {
    this.alert.delete_alert(alertID);
  }

  fadeOutError(errorID) {
    const element = document.getElementById(errorID.toString());
    element.classList.add('animate__fadeOutLeft');
    element.onanimationend = () => {
      this.delete_error(errorID);
    };
  }

  delete_error(errorID) {
    this.alert.delete_error(errorID);
  }

}
