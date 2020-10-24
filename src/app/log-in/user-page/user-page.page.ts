import { Component, OnInit } from '@angular/core';
import { ParticipantsService } from 'src/app/participants.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExchangesService } from 'src/app/exchanges.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { Schüler } from 'src/assets/models/Schüler.model';
import { ConfigService } from 'src/app/config.service';
import { ScheduleService } from 'src/app/schedule.service';
import { ProjectsService } from 'src/app/projects.service';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.page.html',
  styleUrls: ['./user-page.page.scss'],
  providers: [DatePipe]
})
export class UserPagePage implements OnInit {
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

  projectNoun = this.config.app_config.project_noun;

  studentsCanCreateProjects = this.config.app_config.students_can_create_projects;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private exchangesService: ExchangesService,
              private participantsService: ParticipantsService,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) {}

  ngOnInit() {
    this.text = this.config.get_content('user-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getStudent();
    this.participantsService.update.subscribe(() => this.getStudent());
    this.projectsService.update.subscribe(() => this.getStudent());
  }

  getStudent() {
    this.participantsService.getSelfParticipant().subscribe(data => {
      this.loadedUser = data.data;
      this.loadedUser.exchange_requests = [];
      if (this.currentDate > this.schedule.exchange && this.currentDate <= this.schedule.projects) {
        this.exchangesService.getAllExchangesForParticipant().subscribe(requestData => {
          this.loadedUser.exchange_requests = requestData.data;
        });
      }
      if (this.loadedUser.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getStudent();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  logout() {
    this.participantsService.logOutParticipant();
  }

  sendVerificationEmail() {
    this.participantsService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Verifizierungs E-Mail konnte nicht versandt werden!', error.error);
    });
  }

}
