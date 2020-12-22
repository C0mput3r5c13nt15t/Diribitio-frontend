import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/services/config.service';
import { Schedule } from 'src/models/Schedule.model';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/services/schedule.service';
import { AdminsService } from 'src/app/services/admins.service';
import { AlertService } from 'src/app/services/alert.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-logs',
  templateUrl: './admin-logs.page.html',
  styleUrls: ['./admin-logs.page.scss'],
})
export class AdminLogsPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  SignUpEmails: any[] = [];
  SignUpEmail = {
    id: 0,
    email: '',
    email_confirmation: ''
  };

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    control: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    registration: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    sort_students: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    exchange: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    projects: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    end: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
  };

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  text: string;

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private scheduleService: ScheduleService,
              private adminsService: AdminsService,
              private alertCtrl: AlertController,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('admin-logs');

    this.currentDate = formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.getSchedule();
    this.getSignUpemails();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.adminsService.update.subscribe(() => this.getSignUpemails()),
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Gets the current time schedule for the application and sets the schedule value
   */
  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  getSignUpemails() {
    this.adminsService.getAllSignUpEmails().subscribe(data => {
      this.SignUpEmails = data.data;
    });
  }

  postSignUpEmail(form) {
    this.adminsService.createSignUpEmail(this.SignUpEmail).subscribe(data => {
      this.SignUpEmails.push(data.data);
      this.alert.alert(data.message);
      form.reset();
      this.adminsService.update.emit();
    }, error => {
      this.alert.error('Freigeben der E-Mail fehlgeschlagen!', error.error);
    });
  }

  deleteSignUpEmail(emailID) {
    this.alertCtrl.create({
      header: 'Sind sie sicher?',
      message: 'Wollen sie diese E-Mail wirklich sperren?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Sperren',
        handler: () => {
          if (this.SignUpEmail.email === this.SignUpEmail.email_confirmation) {
            this.SignUpEmails = this.SignUpEmails.filter(filterEmail => {
              return emailID !== filterEmail.id;
            });
            this.adminsService.deleteSignUpEmail(emailID);
          } else {
            this.alert.error('Die angegebenen E-Mails stimmen nicht überein.');
          }
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
