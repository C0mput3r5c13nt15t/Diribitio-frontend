import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ScreensizeService } from 'src/app/services/screensize.service';
import { AlertService } from 'src/app/services/alert.service';
import { ConfigService } from 'src/app/services/config.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  isDesktop: boolean;

  /**
   * Contains all active alert and error messages
   */
  alertsAndErrors = [];
  /**
   * Contains the maximum lifetime for alert and error messages
   */
  maxLifetime = this.config.ui.alert_errors_max_lifetime * 1000;
  /**
   * Conatins the noun to be used instead of projects
   */
  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;
  /**
   * Conatins the subscription for a regular interval
   */
  private regularInterval: Subscription;

  constructor(private screensizeService: ScreensizeService,
              public auth: AuthenticationService,
              private alertService: AlertService,
              private config: ConfigService) {
    this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        window.location.reload();
      }
      this.isDesktop = isDesktop;
    });
    this.alertService.update.subscribe(() => this.getAlertsAndErrors());
    const source = interval(this.maxLifetime / 2);
    this.regularInterval = source.subscribe(() => this.deleteOldAlertsAndErrors(this.maxLifetime));
  }

  getAlertsAndErrors() {
    this.alertsAndErrors = this.alertService.alertsAndErrors;
  }

  /**
   * Deletes all alert and error messages that are older than the maximum lifetime
   * @param maxLifetime Contains the maximum lifetime
   */
  deleteOldAlertsAndErrors(maxLifetime: number) {
    const now = new Date().getTime();
    this.alertsAndErrors.forEach((alert) => {
      if (now - alert.time > maxLifetime) {
        this.fadeOutAlertOrError(alert.id);
      }
    });
  }

  fadeOutAlertOrError(alertID) {
    const element = document.getElementById(alertID.toString());
    element.classList.add('animate__fadeOutLeft');
    element.onanimationend = () => {
      this.deleteAlertOrError(alertID);
    };
  }

  deleteAlertOrError(alertID) {
    this.alertService.delete_alert_error(alertID);
  }

}
