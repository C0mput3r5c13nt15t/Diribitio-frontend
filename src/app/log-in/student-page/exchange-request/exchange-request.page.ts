import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { Student } from 'src/models/Student.model';
import { ExchangesService } from 'src/app/services/exchanges.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-exchange-request',
  templateUrl: './exchange-request.page.html',
  styleUrls: ['./exchange-request.page.scss'],
})
export class ExchangeRequestPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  studentUrl: string;

  loadedStudent: Student = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    grade: 0,
    letter: '',
    exchange_id: 0,
    first_friend: 0,
    second_friend: 0,
    third_friend: 0,
    first_wish: 0,
    second_wish: 0,
    third_wish: 0,
    project_id: 0,
    role: 1
  };

  exchangePartner: any = {
    first_name: '',
    last_name: '',
    grade: 0,
    letter: '',
  };

  text: string;

  studentAlreadyExchangeError: string;

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private studentsService: StudentsService,
              private exchangesService: ExchangesService,
              private alertCtrl: AlertController,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('user-exchange-request');

    this.studentAlreadyExchangeError = this.config.get_error('student-already_exchange');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.getStudent();

    this.subscriptions.push(
      this.studentsService.update.subscribe(() => this.getStudent()),
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getStudent() {
    this.studentsService.getSelfStudent().subscribe(data => {
      this.loadedStudent = data.data;
    });
  }

  submit() {
    this.studentsService.getStudentID(this.exchangePartner).subscribe(data => {
      // tslint:disable-next-line:disable-next-line: triple-equals
      if (data.id != 0 && this.loadedStudent.exchange_id == 0) {
        this.exchangesService.createExchange(data.id).subscribe(response => {
          this.alert.alert(response.message);
          this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
          this.exchangesService.update.emit();
        }, error => {
          this.alert.error('Erstellung des Tausches fehlgeschlagen!', error.error);
        });
      } else {
        this.alertCtrl.create({
          header: 'Fehler',
          message: 'Du must zuerst einen validen Tauschpartner auswählen!',
          buttons: [{
            text: 'Ok',
            role: 'cancel',
            }]
          }).then(alertEl => {
            alertEl.present();
          });
      }
    });
  }

  delete() {
    this.alertCtrl.create({
      header: 'Bist du sicher?',
      message: 'Willst du wirklich deine Tauschanfrage löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.exchangesService.deleteSelfExchange().subscribe(data => {
            this.alert.alert(data.message);
            this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
            this.exchangesService.update.emit();
          }, error => {
            this.alert.error('Löschung der Tauschanfrage fehlgeschlagen!', error.error);
          });
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
