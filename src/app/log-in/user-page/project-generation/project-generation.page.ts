import { Component, OnInit, ViewChild, Directive, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { Student } from 'src/assets/models/Student.model';
import { Message } from 'src/assets/models/Message.model';
import { AlertService } from 'src/app/alert.service';
import { Project } from 'src/assets/models/Project.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-project-generation',
  templateUrl: './project-generation.page.html',
  styleUrls: ['./project-generation.page.scss'],
})
export class ProjectGenerationPage implements OnInit {
  studentUrl: string;

  loadedStudentent: Student;

  messages: Message[] = [];

  newProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: null,
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

  text: string;

  image: any;

  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('user-project-generation');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });
  }

  changeFile(event) {
    const file = event.target.files[0];

    if (file) {
      this.image = file;
    }
  }

  create() {
    this.projectsService.createProject('students', this.newProject, this.image).subscribe(data => {
      this.alert.alert(data.message);
      this.router.navigate([this.eventName + '/Schüler/' + this.studentUrl]);
      this.projectsService.update.emit();
    }, error => {
      this.alert.error('Erstellung des Projektes fehlgeschlagen!', error.error);
    });
  }

}
