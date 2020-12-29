import { Injectable, Output, EventEmitter } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './config.service';
import { ScreensizeService } from './screensize.service';
import { formatDate } from '@angular/common';

/**
 * This service handles the display of all error and alert messages
 */
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  /**
   * The update event is emitted after every major successful request
   */
  @Output() update = new EventEmitter();

  isDesktop: boolean;

  /**
   * Conatins the terms of conditions
   */
  conditions: string;

  constructor(private alertCtrl: AlertController,
              private loadingController: LoadingController,
              private screensizeService: ScreensizeService,
              private config: ConfigService,
              private cookieService: CookieService ) {
                this.screensizeService.isDesktopView().subscribe(isDesktop => {
                  if (this.isDesktop && !isDesktop) {
                    // Reload because our routing is out of place
                    window.location.reload();
                  }
                  this.isDesktop = isDesktop;
                });
                this.conditions = config.conditions.short_conditions;
              }

  /**
   * Contains all active error messages
   */
  errors = [];
  /**
   * Contains all active alert messages
   */
  alerts = [];
  /**
   * Contains the maximum lifetime for alert and error messages
   */
  maxLifetime = this.config.app_config.alert_errors_max_lifetime * 1000;
  /**
   * Contains the id to be given to the next alert or error message
   */
  id = 1;

  /**
   * Creates an alert message for the desktop layout
   * @param text Contains the text to be displayed by the alert
   */
  desktop_alert(text) {
    if (!text) {
      text = 'Die Aktion wurde Erfolgreich durchgeführt.';
    }
    const alertData = {
      id: this.id,
      header: 'Erfolg',
      desrc: text,
      time: new Date().getTime()
    };
    this.id += 1;
    this.alerts.push(alertData);
    this.delete_old_alerts(this.maxLifetime);
    this.delete_old_errors(this.maxLifetime);
    this.update.emit();
  }

  /**
   * Deletes all alert messages that are older than the maximum lifetime
   * @param maxLifetime Contains the maximum lifetime
   */
  delete_old_alerts(maxLifetime: number) {
    const now = new Date().getTime();
    this.alerts.forEach((alert) => {
      if (now - alert.time > maxLifetime) {
        this.delete_alert(alert.id);
      }
    });
  }

  /**
   * Creates an error message for the desktop layout
   * @param text Contains the text to be displayed by the error alert
   * @param output Contains the output of the request
   */
  desktop_error(text, output= '') {
    if (output == null) {
      output = '';
    }
    const errorData = {
      id: this.id,
      header: 'Fehler',
      desrc: text + ' ' + output,
      time: new Date().getTime()
    };
    this.id += 1;
    this.errors.push(errorData);
    this.delete_old_errors(this.maxLifetime);
    this.delete_old_alerts(this.maxLifetime);
    this.update.emit();
  }

  /**
   * Deletes all error messages that are older than the maximum lifetime
   * @param maxLifetime Contains the maximum lifetime
   */
  delete_old_errors(maxLifetime: number) {
    const now = new Date().getTime();
    this.errors.forEach((error) => {
        if (now - error.time > maxLifetime) {
          this.delete_error(error.id);
        }
      });
  }

  /**
   * Deletes the alert message with the given id for the desktop layout
   * @param alertID Contains the id of the alert to be deleted
   */
  delete_alert(alertID: number) {
    this.alerts = this.alerts.filter(alert => {
      return alert.id !== alertID;
    });
    this.update.emit();
  }

  /**
   * Delets the error message with the given id for the desktop layout
   * @param alertID Contains the id of the error alert to be deleted
   */
  delete_error(errorID: number) {
    this.errors = this.errors.filter(error => {
      return error.id !== errorID;
    });
    this.update.emit();
  }

  /**
   * Creates an alert message for either the desktop or the mobile layout
   * @param text Contains the text to be displayed by the alert
   */
  alert(text: string) {
    if (!text) {
      text = 'Die Aktion wurde Erfolgreich durchgeführt.';
    }

    if (this.isDesktop) {
      this.desktop_alert(text);
    } else {
      this.alertCtrl.create({
        header: 'Erfolg',
        message: text,
        buttons: [{
          text: 'OK',
          role: 'cancel',
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
  }

  /**
   * Creates an error message for either the desktop or the mobile layout
   * @param text Contains the text to be displayed by the error alert
   * @param output Contains the output of the request
   */
  error(text: string, output= '') {
    if (output == null || typeof output !== 'string') {
      output = '';
    }
    if (this.isDesktop) {
      this.desktop_error(text, output);
    } else {
      this.alertCtrl.create({
        header: 'Fehler',
        message: text + ' ' + output,
        buttons: [{
          text: 'OK',
          role: 'cancel',
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
  }

  /**
   * Creates an loading screen for a given amount of time
   * @param time Contains the time the loading screen should appear
   */
  async loading(time: number) {
    const loading = await this.loadingController.create({
      message: 'Bitte gedulden sie sich einen Augenblick...',
      duration: time
    });
    await loading.present();
  }

  /**
   * Creates an waiting screen after a number of wrong login tries
   * @param time Contains the time the waiting screen should appear
   * @param tries Contains the number of times the user provided incorrect login credentials
   */
  async wrongPassword(time: number, tries= 5) {
    const loading = await this.loadingController.create({
      message: 'Sie haben ' + tries.toString() + 'mal ein falsches Passwort oder einen falschen Benutzernamen angegeben!',
      duration: time
    });
    await loading.present();
  }

  /**
   * Creates an alert message that displays all the Terms of Use
   */
  agreements() {
    this.alertCtrl.create({
      header: 'AGBs und Cookienutzung',
      message: this.conditions,
      buttons: [{
        text: 'Akzeptieren',
        role: 'cancel',
      }]
    }).then(alertEl => {
      alertEl.present();
      this.cookieService.set('Diribitio-AgreedOn', formatDate(new Date(), 'yyyy-MM-dd', 'en'));
    });
  }
}
