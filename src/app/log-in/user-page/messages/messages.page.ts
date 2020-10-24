import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { MessagesService } from 'src/app/messages.service';
import { Schüler } from 'src/assets/models/Schüler.model';
import { Projekt } from 'src/assets/models/Projekt.model';
import { AlertService } from 'src/app/alert.service';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  participantUrl: string;

  leadedProject: Projekt = {
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

  newMessage: any = {
    project_id: 0,
    message: ''
  };

  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private alert: AlertService,
              private projectsService: ProjectsService,
              private messagesService: MessagesService,
              private config: ConfigService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.participantUrl = paramMap.get('ParticipantName');
    });

    this.getProject();
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
