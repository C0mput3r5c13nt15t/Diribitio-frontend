import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ScreensizeService } from 'src/app/services/screensize.service';
import { AlertService } from 'src/app/services/alert.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean;

  /**
   * Contains all active error messages
   */
  errors = [];
  /**
   * Contains all active alert messages
   */
  alerts = [];

  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private screensizeService: ScreensizeService,
              public auth: AuthenticationService,
              private alert: AlertService,
              private config: ConfigService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
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

  fadeOutAlert(alertID) {
    const element = document.getElementById(alertID.toString());
    element.classList.add('animate__fadeOutLeft');
    element.onanimationend = () => {
      this.delete_alert(alertID);
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
