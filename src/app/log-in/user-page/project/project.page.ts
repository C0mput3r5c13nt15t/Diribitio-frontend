import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectsService } from 'src/app/projects.service';
import { Student } from 'src/assets/models/Student.model';
import { Project } from 'src/assets/models/Project.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  studentUrl: string;

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
    role: 1
  };

  chosenProject: Project = {
    id: 0,
    authorized: 0,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
    leader_type: '',
    leader_id: 0,
    messages: [],
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
    participants: [],
    assistant_student_leaders: []
  };

  studentLoadingProject: string;
  studentProjectNotAllowed: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.studentLoadingProject = this.config.get_error('student-loading_project');
    this.studentProjectNotAllowed = this.config.get_error('student-project_not_allowed');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.getProject();
  }

  getProject() {
    this.projectsService.getSelfProject().subscribe(data => {
      this.chosenProject = data.data;
    });
  }

}
