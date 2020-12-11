import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/models/Project.model';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.page.html',
  styleUrls: ['./admin-projects.page.scss'],
})
export class AdminProjectsPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  projects: Project[];

  text: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectsNoun = this.config.app_config.projects_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private projectsService: ProjectsService,
              private activatedRoute: ActivatedRoute,
              private config: ConfigService) { }

  ngOnInit() {
    this.text = this.config.get_content('admin-projects');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.getProjects();

    this.subscriptions.push(
      this.projectsService.update.subscribe(() => this.getProjects())
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.projects = data.data;
    });
  }

}
