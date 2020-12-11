import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/models/Project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.page.html',
  styleUrls: ['./project-detail.page.scss'],
})

export class ProjectDetailPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  studentUrl: string;

  projectId: number;

  loadedProject: Project = {
    id: 0,
    authorized: 1,
    editable: 0,
    title: '',
    image: '',
    descr: '',
    leader_name: '',
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
  };

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ProjectID') || !paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.projectId = Number(paramMap.get('ProjectID'));
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.projectsService.getProject(this.projectId).subscribe(data => {
      this.loadedProject = data.data;
    });
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
