import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { MessagesService } from 'src/app/messages.service';
import { Projectleader } from 'src/models/Projectleader';
import { Project } from 'src/models/Project.model';
import { AlertService } from 'src/app/alert.service';
import { ConfigService } from 'src/app/config.service';
import { Subscription } from 'rxjs';
import { LeadersService } from 'src/app/leaders.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.page.html',
  styleUrls: ['./messages.page.scss'],
})
export class MessagesPage implements OnInit {
  private subscriptions: Subscription[] = [];

  leaderUrl: string;

  loadedLeader: Projectleader = {
    id: 0,
    user_name: '',
    email: '',
    password: '',
    project_id: 0,
  };

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

  newMessage: any = {
    message: ''
  };

  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private alert: AlertService,
              private projectsService: ProjectsService,
              private leadersService: LeadersService,
              private messagesService: MessagesService,
              private config: ConfigService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('LeaderName')) {
        this.router.navigate(['']);
        return;
      }
      this.leaderUrl = paramMap.get('LeaderName');
    });

    this.getProject();
    this.getLeader();

    this.subscriptions.push(
      this.messagesService.update.subscribe(() => this.getProject()),
      this.messagesService.update.subscribe(() => this.getLeader())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getLeader() {
    this.leadersService.getSelfLeader().subscribe(data => {
      this.loadedLeader = data.data;
    });
  }

  getProject() {
    this.projectsService.getSelfLeadedProject('leaders').subscribe(data => {
      this.leadedProject = data.data;
    });
  }

  send(message) {
    if (message.valid === true) {
      this.messagesService.createMessage('leaders', this.newMessage).subscribe(data => {
        this.messagesService.update.emit();
        this.leadedProject.messages.push(data.data);
      }, error => {
        this.alert.error('Versandt der Nachricht fehlgeschlagen!', error.error);
      });
      message.reset();
    }
  }

  delete(Message) {
    this.leadedProject.messages = this.leadedProject.messages.filter(message => {
      return message.id !== Message.id;
    });
    this.messagesService.deleteMessage('leaders', Message.id);
  }

}
