import { Component, OnInit } from '@angular/core';
import { Project } from 'src/models/Project.model';
import { Student } from 'src/models/Student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { StudentsService } from 'src/app/students.service';
import { ConfigService } from 'src/app/config.service';
import { AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-promote-students',
  templateUrl: './promote-students.page.html',
  styleUrls: ['./promote-students.page.scss'],
})
export class PromoteStudentsPage implements OnInit {
  private subscriptions: Subscription[] = [];

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

  leadedProject: Project = {
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

  studentUrl: string;

  text: string;

  studentNoAssistantsEditByAssistants = '';

  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private studentsService: StudentsService,
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
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.getProject();
    this.getStudent();

    this.subscriptions.push(
      this.projectsService.update.subscribe(() => {this.getProject(); this.getStudent(); }),
      this.studentsService.update.subscribe(() => {this.getProject(); this.getStudent(); })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('students').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

  getStudent() {
    this.studentsService.getSelfStudent().subscribe(data => {
      this.loadedStudent = data.data;
    });
  }

  promoteStudent(form) {
    this.studentsService.getStudentID(this.declaredAssistant).subscribe(data => {
      if (data.id !== 0) {
        this.studentsService.promoteStudent(data.id);
        form.reset();
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
    this.studentsService.suspendStudent(assistentID);
  }

  quitAssistent() {
    this.studentsService.quitAssistant().subscribe(data => {
      this.alert.alert(data.message);
      this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
      this.studentsService.update.emit();
    }, error => {
      this.alert.error('Kündigung als Assistent fehlgeschlagen!', error.error);
    });
  }
}
