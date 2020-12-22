import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { Project } from 'src/models/Project.model';
import { Student } from 'src/models/Student.model';
import { ConfigService } from 'src/app/services/config.service';
import { Schedule } from 'src/models/Schedule.model';
import { ScheduleService } from 'src/app/services/schedule.service';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-project-administration',
  templateUrl: './student-project-administration.page.html',
  styleUrls: ['./student-project-administration.page.scss'],
})
export class StudentProjectAdministrationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

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

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    control: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    registration: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    sort_students: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    exchange: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    projects: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en'),
    end: formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en')
  };

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  studentNoProjectEditByAssistants: string;
  studentLoadingProject: string;
  studentWrongTime: string;

  imageUrl = this.config.backend_config.imageUrl;
  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private studentsService: StudentsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.projectNoun = this.config.app_config.project_noun;

    this.studentNoProjectEditByAssistants = this.config.get_error('student-no_project_edit_by_assistants');
    this.studentLoadingProject = this.config.get_error('student-loading_project');
    this.studentWrongTime = this.config.get_error('student-wrong_time');

    this.currentDate = formatDate(new Date(2005, 8, 27), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.getSchedule();
    this.getProject();
    this.getStudent();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.projectsService.update.subscribe(() => this.getProject()),
      this.studentsService.update.subscribe(() => this.getStudent())
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  /**
   * Gets the current time schedule for the application and sets the schedule value
   */
  getSchedule() {
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
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

}
