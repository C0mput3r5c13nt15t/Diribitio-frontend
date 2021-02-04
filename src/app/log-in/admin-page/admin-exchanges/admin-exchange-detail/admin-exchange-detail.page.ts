import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangesService } from 'src/app/services/exchanges.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { AlertController } from '@ionic/angular';
import { Exchange } from 'src/models/Exchange.model';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-exchange-detail',
  templateUrl: './admin-exchange-detail.page.html',
  styleUrls: ['./admin-exchange-detail.page.scss'],
})
export class AdminExchangeDetailPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  adminUrl: string;
  exchangeId: number;

  loadedExchange: Exchange = {
    id: 0,
    sender_id: 0,
    receiver_id: 0,
    confirmed: 0,
    accomplished: 0,
    sender: null,
    receiver: null
  };

  firstProjectName = '';
  firstMinGrade = 0;
  firstMaxGrade = 0;
  secondProjectName = '';
  secondMinGrade = 0;
  secondMaxGrade = 0;

  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private exchangesService: ExchangesService,
              private projectService: ProjectsService,
              private alertCtrl: AlertController,
              private config: ConfigService ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ExchangeID')) {
        this.router.navigate(['']);
        return;
      }
      this.adminUrl = paramMap.get('AdminName');
      this.exchangeId = Number(paramMap.get('ExchangeID'));
    });

    this.getExchange();

    this.subscriptions.push(
      this.exchangesService.update.subscribe(() => this.getExchange()),
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getExchange() {
    this.exchangesService.getExchange(this.exchangeId).subscribe(data => {
      this.loadedExchange = data.data;
      this.projectService.getProject(this.loadedExchange.sender.project_id).subscribe(projectData => {
        this.firstProjectName = projectData.data.title;
        this.firstMinGrade = projectData.data.min_grade;
        this.firstMaxGrade = projectData.data.max_grade;
      });
      this.projectService.getProject(this.loadedExchange.receiver.project_id).subscribe(projectData => {
        this.secondProjectName = projectData.data.title;
        this.secondMinGrade = projectData.data.min_grade;
        this.secondMaxGrade = projectData.data.max_grade;
      });
    });
  }

  deleteExchange() {
    this.alertCtrl.create({
      header: 'Bist du sicher?',
      message: 'Wollen Sie diesen Tausch wirklich unwiederruflich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.exchangesService.deleteExchange(this.loadedExchange.id);
          this.router.navigate([this.eventName + '/Admin/' + this.adminUrl + '/Tauschanfragen']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  carryOutExchange() {
    this.exchangesService.carryOutExchange(this.loadedExchange.id);
    this.router.navigate([this.eventName + '/Admin/' + this.adminUrl + '/Tauschanfragen']);
  }

}
