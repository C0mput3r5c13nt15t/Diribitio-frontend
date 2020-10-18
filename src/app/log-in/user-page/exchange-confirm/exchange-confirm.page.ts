import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExchangesService } from 'src/app/exchanges.service';
import { ProjectsService } from 'src/app/projects.service';
import { AlertController } from '@ionic/angular';
import { Schüler } from 'src/assets/models/Schüler.model';
import { ConfigService } from 'src/app/config.service';
import { AlertService } from 'src/app/alert.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-exchange-confirm',
  templateUrl: './exchange-confirm.page.html',
  styleUrls: ['./exchange-confirm.page.scss'],
})
export class ExchangeConfirmPage implements OnInit {
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
    exchange_requests: [],
    first_friend: 0,
    second_friend: 0,
    third_friend: 0,
    first_wish: 0,
    second_wish: 0,
    third_wish: 0,
    project_id: 0,
    role: 1
  };

  currentDate: any;

  content: string;

  studentAlreadyExchangeError: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private exchangesService: ExchangesService,
              private projectsService: ProjectsService,
              private alertCtrl: AlertController,
              private config: ConfigService,
              private alert: AlertService ) { }

  ngOnInit() {
    this.content = this.config.get_content('user-exchange-confirm');

    this.studentAlreadyExchangeError = this.config.get_error('student-already_exchange');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.participantUrl = paramMap.get('ParticipantName');
    });

    this.getExchanges();
  }

  getExchanges() {
    this.exchangesService.getAllExchangesForParticipant().subscribe(data => {
      this.loadedUser.exchange_requests = data.data;
      this.loadedUser.exchange_requests.forEach(request => {
        this.projectsService.getLittleProject(request.sender.project_id).subscribe(response => {
          request.sender.project_title = response.data.title;
        });
      });
    });
  }

  confirm(exchangeID) {
    this.alertCtrl.create({
      header: 'Bist du sicher?',
      message: 'Willst du wirklich tauschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Ja',
        handler: async () => {
          this.exchangesService.confirmExchange(exchangeID).subscribe(data => {
            this.alert.alert(data.message);
            this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
            this.exchangesService.update.emit();
          }, error => {
            this.alert.error('Bestätigung des Tausches fehlgeschlagen!', error.error);
          });
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
