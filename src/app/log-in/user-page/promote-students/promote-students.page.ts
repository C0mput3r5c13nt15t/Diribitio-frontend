import { Component, OnInit } from '@angular/core';
import { Projekt } from 'src/assets/models/Projekt.model';
import { Schüler } from 'src/assets/models/Schüler.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { ParticipantsService } from 'src/app/participants.service';
import { ConfigService } from 'src/app/config.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-promote-students',
  templateUrl: './promote-students.page.html',
  styleUrls: ['./promote-students.page.scss'],
})
export class PromoteStudentsPage implements OnInit {
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
    role: 2
  };

  leadedProject: Projekt = {
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
    assistant_student_leaders: []
  };

  declaredAssistant: any = {
    id: 0,
    first_name: '',
    last_name: '',
    grade: 0,
    letter: '',
  };

  participantUrl: string;

  text: string;

  studentNoAssistantsEditByAssistants = '';

  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private participantsService: ParticipantsService,
              private config: ConfigService,
              private alertCtrl: AlertController,
              private alert: AlertService ) { }

  ngOnInit() {
    this.text = this.config.get_content('promote-students');

    this.studentNoAssistantsEditByAssistants = this.config.get_error('student-no_assistants_edit_by_assistants');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.participantUrl = paramMap.get('ParticipantName');
    });
    this.getProject();
    this.getStudent();

    this.participantsService.update.subscribe(() => this.getProject());
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('students').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

  getStudent() {
    this.participantsService.getSelfParticipant().subscribe(data => {
      this.loadedUser = data.data;
    });
  }

  promoteStudent() {
    this.participantsService.getParticipantID(this.declaredAssistant).subscribe(data => {
      if (data.id !== 0) {
        this.participantsService.promoteStudent(data.id);
      } else {
        this.alertCtrl.create({
          header: 'Fehler',
          message: 'Der angegebene Schüler konnte nicht gefunden werden!',
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

  suspendStudent(assistentID) {
    this.participantsService.suspendStudent(assistentID);
  }

  quitAssistent() {
    this.participantsService.quitAssistant().subscribe(data => {
      this.alert.alert(data.message);
      this.router.navigate([this.eventName + '/Schüler/' + this.participantUrl]);
      this.participantsService.update.emit();
    }, error => {
      this.alert.error('Kündigung als Assistent fehlgeschlagen!', error.error);
    });
  }
}
