import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { ActivatedRoute } from '@angular/router';
import { Projekt } from 'src/assets/models/Projekt.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-admin-projects',
  templateUrl: './admin-projects.page.html',
  styleUrls: ['./admin-projects.page.scss'],
})
export class AdminProjectsPage implements OnInit {
  adminUrl: string;

  projects: Projekt[];

  text: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectsNoun = this.config.app_config.projects_noun;
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

    this.projectsService.update.subscribe(() => this.getProjects());
  }

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.projects = data.data;
    });
  }

}
