import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LeadersService } from 'src/app/services/leaders.service';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-leader-generation',
  templateUrl: './leader-generation.page.html',
  styleUrls: ['./leader-generation.page.scss'],
})
export class LeaderGenerationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  signUpData: any = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  text: string;

  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private alertCtrl: AlertController,
              private leadersService: LeadersService,
              private config: ConfigService ) { }

  ngOnInit() {
    this.text = this.config.get_content('leader-generation');
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  SignUpAsLeader(form) {
    if (this.signUpData.password === this.signUpData.password_confirmation) {
      this.leadersService.signUpLeader(this.signUpData, form);
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
