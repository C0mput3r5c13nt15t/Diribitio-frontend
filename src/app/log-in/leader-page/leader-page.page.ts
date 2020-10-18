import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeadersService } from 'src/app/leaders.service';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { Projektleiter } from 'src/assets/models/Projektleiter';
import { ConfigService } from 'src/app/config.service';
import { ScheduleService } from 'src/app/schedule.service';
import { AlertService } from 'src/app/alert.service';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'app-leader-page',
  templateUrl: './leader-page.page.html',
  styleUrls: ['./leader-page.page.scss'],
})
export class LeaderPagePage implements OnInit {
  loadedLeader: Projektleiter = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0
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

  projectNoun: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private leadersService: LeadersService,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) { }

  ngOnInit() {
    this.projectNoun = this.config.app_config.project_noun;

    this.text = this.config.get_content('leader-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
    });
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getLeader();
    this.leadersService.update.subscribe(() => this.getLeader());
    this.projectsService.update.subscribe(() => this.getLeader());
  }

  getLeader() {
    this.leadersService.getSelfLeader().subscribe(data => {
      this.loadedLeader = data.data;

      if (this.loadedLeader.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getLeader();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  sendVerificationEmail() {
    this.leadersService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
    });
  }

  logout() {
    this.leadersService.logOutLeader();
  }

}
