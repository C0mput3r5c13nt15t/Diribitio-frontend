import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Student } from 'src/models/Student.model';
import { Project } from 'src/models/Project.model';
import { AlertService } from 'src/app/services/alert.service';
import { ConfigService } from 'src/app/services/config.service';
import { StudentsService } from 'src/app/services/students.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages',
  templateUrl: './student-messages.page.html',
  styleUrls: ['./student-messages.page.scss'],
})
export class StudentMessagesPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  studentUrl: string;

  leadedProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
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
    participants: []
  };

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

  newMessage: any = {
    project_id: 0,
    message: ''
  };

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private alert: AlertService,
              private projectsService: ProjectsService,
              private studentsService: StudentsService,
              private messagesService: MessagesService,
              private config: ConfigService) {}

  ngOnInit() {
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
      this.messagesService.update.subscribe(() => this.getProject()),
      this.messagesService.update.subscribe(() => this.getStudent())
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getStudent() {
    this.studentsService.getSelfStudent().subscribe(data => {
      this.loadedStudent = data.data;
    });
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('students').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

  send(message) {
    if (message.valid === true) {
      this.messagesService.createMessage('students', this.newMessage).subscribe(data => {
        this.messagesService.update.emit();
        this.leadedProject.messages.push(data.data);
      }, error => {
        this.alert.error('Versandt der Nachricht fehlgeschlagen!', error.error);
      });
      message.reset();
    }
  }

  delete(message) {
    this.leadedProject.messages = this.leadedProject.messages.filter(filterMessage => {
      return message.id !== filterMessage.id;
    });
    this.messagesService.deleteMessage('students', message.id);
  }

}
