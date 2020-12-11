import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ConfigService } from 'src/app/services/config.service';
import { AdminsService } from 'src/app/services/admins.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-generation',
  templateUrl: './admin-generation.page.html',
  styleUrls: ['./admin-generation.page.scss'],
})
export class AdminGenerationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  signUpData = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  explanation = this.config.get_content('admin-generation');

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private alertCtrl: AlertController,
              private adminsService: AdminsService,
              private config: ConfigService) { }

  ngOnInit() {
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  signUpAsAdmin(form) {
    if (this.signUpData.password === this.signUpData.password_confirmation) {
      this.adminsService.signUpAdmin(this.signUpData, form);
    } else {
      this.alertCtrl.create({
        header: 'Fehler',
        message: 'Das bestätigte Passwort entspricht nicht dem anfangs eingegebenen!',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          }]
        }).then(alertEl => {
          alertEl.present();
        });
    }
  }

}
