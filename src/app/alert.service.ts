import { Injectable, Output, EventEmitter } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { ConfigService } from './config.service';
import { ScreensizeService } from './screensize.service';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  @Output() update = new EventEmitter();

  isDesktop: boolean;

  conditions = '';

  constructor(private alertCtrl: AlertController,
              private loadingController: LoadingController,
              private screensizeService: ScreensizeService,
              private config: ConfigService) {
                this.screensizeService.isDesktopView().subscribe(isDesktop => {
                  if (this.isDesktop && !isDesktop) {
                    // Reload because our routing is out of place
                    window.location.reload();
                  }

                  this.isDesktop = isDesktop;
                });
                this.conditions = config.conditions.short_conditions;
              }

  errors = [];
  alerts = [];
  id = 1;

  /**
   * @description Creates an alert for the desktop layout
   * @param text Contains the text to be displayed by the alert
   */
  desktop_alert(text) {
    if (!text) {
      text = 'Die Aktion wurde Erfolgreich durchgeführt.';
    }
    const alertData = {
      id: this.id,
      header: 'Erfolg',
      desrc: text
    };
    this.id += 1;
    this.alerts.push(alertData);
    this.update.emit();
  }

  /**
   * @description Creates an error alert for the desktop layout
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
      desrc: text + ' ' + output
    };
    this.id += 1;
    this.errors.push(errorData);
    this.update.emit();
  }

  /**
   * @description Delets the alert with the given id for the desktop layout
   * @param alertID Contains the id of the alert to be deleted
   */
  delete_alert(alertID) {
    this.alerts = this.alerts.filter(alert => {
      return alert.id !== alertID;
    });
    this.update.emit();
  }

  /**
   * @description Delets the error alert with the given id for the desktop layout
   * @param alertID Contains the id of the error alert to be deleted
   */
  delete_error(errorID) {
    this.errors = this.errors.filter(error => {
      return error.id !== errorID;
    });
    this.update.emit();
  }

  /**
   * @description Creates an alert for either the desktop or the mobile layout
   * @param text Contains the text to be displayed by the alert
   */
  alert(text) {
    if (this.isDesktop) {
      this.desktop_alert(text);
    } else {
      if (!text) {
        text = 'Die Aktion wurde Erfolgreich durchgeführt.';
      }
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
   * @description Creates an error alert for either the desktop or the mobile layout
   * @param text Contains the text to be displayed by the error alert
   * @param output Contains the output of the request
   */
  error(text, output= '') {
    if (this.isDesktop) {
      this.desktop_error(text, output);
    } else {
      if (output == null || typeof output !== 'string') {
        output = '';
      }
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
   * @description Creates an loading screen for a given amount of time
   * @param time Contains the time the loading screen should appear
   */
  async loading(time) {
    const loading = await this.loadingController.create({
      message: 'Bitte gedulden sie sich einen Augenblick...',
      duration: time
    });
    await loading.present();
  }

  /**
   * @description Creates an waiting screen after a number of wrong login tries to prevent brute force attacks
   * @param time Contains the time the waiting screen should appear
   * @param tries Contains the number of times the user provided incorrect login credentials
   */
  async wrongPassword(time, tries= 5) {
    const loading = await this.loadingController.create({
      message: 'Sie haben ' + tries.toString() + 'mal ein falsches Passwort oder einen falschen Benutzernamen angegeben!',
      duration: time
    });
    await loading.present();
  }

  /**
   * @description Creates an alert that displays all the Terms of Use
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
    });
  }
}
