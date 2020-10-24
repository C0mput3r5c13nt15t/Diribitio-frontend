import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantsService } from 'src/app/participants.service';
import { Schüler } from 'src/assets/models/Schüler.model';
import { ExchangesService } from 'src/app/exchanges.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-exchange-request',
  templateUrl: './exchange-request.page.html',
  styleUrls: ['./exchange-request.page.scss'],
})
export class ExchangeRequestPage implements OnInit {
  participantUrl: string;

  loadedUser: Schüler = {
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

  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private participantsService: ParticipantsService,
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
      this.participantUrl = paramMap.get('ParticipantName');
    });
    this.getStudent();
  }

  getStudent() {
    this.participantsService.getSelfParticipant().subscribe(data => {
      this.loadedUser = data.data;
    });
  }

  submit() {
    this.participantsService.getParticipantID(this.exchangePartner).subscribe(data => {
      // tslint:disable-next-line:disable-next-line: triple-equals
      if (data.id != 0 && this.loadedUser.exchange_id == 0) {
        this.exchangesService.createExchange(data.id).subscribe(response => {
          this.alert.alert(response.message);
          this.router.navigate([this.eventName + '/Schüler/' + this.participantUrl]);
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
            this.router.navigate([this.eventName + '/Schüler/' + this.participantUrl]);
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
