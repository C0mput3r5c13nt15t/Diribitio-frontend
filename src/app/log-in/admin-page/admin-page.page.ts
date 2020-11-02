import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminsService } from 'src/app/admins.service';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { Admin } from 'src/assets/models/Admin.model';
import { ConfigService } from 'src/app/config.service';
import { ScheduleService } from 'src/app/schedule.service';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.page.html',
  styleUrls: ['./admin-page.page.scss'],
})
export class AdminPagePage implements OnInit {
  loadedAdmin: Admin = {
    id: 0,
    user_name: '',
    email: '',
    password: ''
  };

  schedule: Zeitplan = {
    id: 1,
    begin: null,
    control: null,
    registration: null,
    sort_students: null,
    exchange: null,
    projects: null,
    end: null
  };

  currentDate: any;

  text: string;

  buttonPressed = true;

  projectsNoun = this.config.app_config.projects_noun;
  projectNoun = this.config.app_config.project_noun;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private adminsService: AdminsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) { }

  ngOnInit() {
    this.projectsNoun = this.config.app_config.projects_noun;
    this.projectNoun = this.config.app_config.project_noun;

    this.text = this.config.get_content('admin-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('AdminName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getAdmin();
    this.adminsService.update.subscribe(() => this.getAdmin());
  }

  getAdmin() {
    this.adminsService.getSelfAdmin().subscribe(data => {
      this.loadedAdmin = data.data;

      if (this.loadedAdmin.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getAdmin();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  sendVerificationEmail() {
    this.adminsService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

  logout() {
    this.adminsService.logOutAdmin();
  }

}
