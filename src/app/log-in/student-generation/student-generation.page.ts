import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { StudentsService } from 'src/app/services/students.service';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-generation',
  templateUrl: './student-generation.page.html',
  styleUrls: ['./student-generation.page.scss'],
})
export class StudentGenerationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  signUpData: any = {
    user_name: '',
    email: '',
    password: '',
    password_confirmation: '',
  };

  text = this.config.get_content('user-generation');

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private alertCtrl: AlertController,
              private studentsService: StudentsService,
              private config: ConfigService) { }

  ngOnInit() {
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  signUpAsStudent(form) {
    if (this.signUpData.password === this.signUpData.password_confirmation) {
      this.studentsService.signUpStudent(this.signUpData, form);
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
