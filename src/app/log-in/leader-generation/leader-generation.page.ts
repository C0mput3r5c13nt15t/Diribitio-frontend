import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LeadersService } from 'src/app/leaders.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-leader-generation',
  templateUrl: './leader-generation.page.html',
  styleUrls: ['./leader-generation.page.scss'],
})
export class LeaderGenerationPage implements OnInit {
  signUpData: any = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  text: string;

  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private alertCtrl: AlertController,
              private leadersService: LeadersService,
              private config: ConfigService ) { }

  ngOnInit() {
    this.text = this.config.get_content('leader-generation');
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
