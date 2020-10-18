import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { AdminsService } from 'src/app/admins.service';

@Component({
  selector: 'app-admin-generation',
  templateUrl: './admin-generation.page.html',
  styleUrls: ['./admin-generation.page.scss'],
})
export class AdminGenerationPage implements OnInit {
  ionicForm;

  signUpData: any = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: ''
  };

  explanation = '';

  constructor(private alertCtrl: AlertController,
              private router: Router,
              private adminsService: AdminsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.explanation = this.config.get_content('admin-generation');
  }

  signUpAsAdmin(form) {
    if (this.signUpData.password === this.signUpData.password_confirmation) {
      this.adminsService.signUpAdmin(this.signUpData);
      form.reset();
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
