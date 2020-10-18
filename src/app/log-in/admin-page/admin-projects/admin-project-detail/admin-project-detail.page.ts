import { Component, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { AlertController } from '@ionic/angular';
import { Schüler } from 'src/assets/models/Schüler.model';
import { Projekt } from 'src/assets/models/Projekt.model';
import { Zeitplan } from 'src/assets/models/Zeitplan';
import { formatDate } from '@angular/common';
import { ScheduleService } from 'src/app/schedule.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-admin-project-detail',
  templateUrl: './admin-project-detail.page.html',
  styleUrls: ['./admin-project-detail.page.scss'],
})
export class AdminProjectDetailPage implements OnInit {
  adminUrl: string;

  projectId;

  loadedProject: Projekt = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
    leader_type: '',
    leader_id: 0,
    cost: 0,
    first_day_begin: {
      hours: 0,
      minutes: 0,
    },
    first_day_end: {
      hours: 0,
      minutes: 0,
    },
    second_day_begin: {
      hours: 0,
      minutes: 0,
    },
    second_day_end: {
      hours: 0,
      minutes: 0,
    },
    min_grade: 0,
    max_grade: 0,
    min_participants: 0,
    max_participants: 0,
    messages: [],
    participants: [],
    leader: null,
    assistant_student_leaders: []
  };

  loadedStudentLeader: Schüler = {
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
    role: 2
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

  adminWrongTime: string;

  projectNoun: string;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private scheduleService: ScheduleService,
              private projectsService: ProjectsService,
              private alertCtrl: AlertController,
              private config: ConfigService) { }

  ngOnInit() {
    this.projectNoun = this.config.app_config.project_noun;

    this.adminWrongTime = this.config.get_error('admin-wrong_time');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ProjectID')) {
        this.router.navigate(['']);
        return;
      }
      this.adminUrl = paramMap.get('AdminName');
      this.projectId = paramMap.get('ProjectID');
    });

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getProject(this.projectId);

    this.projectsService.update.subscribe(() => this.getProject(this.projectId));
  }

  getProject(ProjectID) {
    this.projectsService.getProjectAdmin(ProjectID).subscribe(data => {
      this.loadedProject = data.data;
    });
  }

  authorizedChanged() {
    this.projectsService.toogleAuthorizedProject(this.loadedProject.id, this.loadedProject.authorized);
  }

  editableChanged() {
    this.projectsService.toogleEditableProject(this.loadedProject.id, this.loadedProject.editable);
  }

  deleteProject() {
    this.alertCtrl.create({
      header: 'Sind sie sicher?',
      message: 'Wollen sie dieses Projekt wirklich unwiederruflich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.projectsService.deleteProject(this.loadedProject.id);
          this.router.navigate(['Projekttage/Admin/' + this.adminUrl + '/Projekte']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

}
