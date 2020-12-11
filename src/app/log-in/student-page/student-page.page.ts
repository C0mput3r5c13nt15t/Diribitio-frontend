import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ExchangesService } from 'src/app/services/exchanges.service';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { Schedule } from 'src/models/Schedule.model';
import { Student } from 'src/models/Student.model';
import { ConfigService } from 'src/app/services/config.service';
import { ScheduleService } from 'src/app/services/schedule.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { AlertService } from 'src/app/services/alert.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.page.html',
  styleUrls: ['./student-page.page.scss'],
  providers: [DatePipe]
})
export class StudentPagePage implements OnInit, OnDestroy {
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
    role: 1
  };

  /**
   * Contains the time schedule of the application
   */
  schedule: Schedule = {
    id: 1,
    begin: null,
    control: null,
    registration: null,
    sort_students: null,
    exchange: null,
    projects: null,
    end: null
  };

  /**
   * Contains the current date in yyyy-MM-dd format
   */
  currentDate: any;

  text: string;

  buttonPressed = true;

  projectNoun = this.config.app_config.project_noun;
  projectsNoun = this.config.app_config.projects_noun;

  studentsCanCreateProjects = this.config.app_config.students_can_create_projects;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private exchangesService: ExchangesService,
              private studentsService: StudentsService,
              private projectsService: ProjectsService,
              private scheduleService: ScheduleService,
              private config: ConfigService,
              private alert: AlertService) {}

  ngOnInit() {
    this.text = this.config.get_content('user-page');

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
    });

    this.getSchedule();
    this.getStudent();

    this.subscriptions.push(
      this.scheduleService.update.subscribe(() => this.getSchedule()),
      this.studentsService.update.subscribe(() => this.getStudent()),
      this.projectsService.update.subscribe(() => this.getStudent())
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

  getStudent() {
    this.studentsService.getSelfStudent().subscribe(data => {
      this.loadedStudent = data.data;
      this.loadedStudent.exchange_requests = [];
      if (this.currentDate > this.schedule.exchange && this.currentDate <= this.schedule.projects) {
        this.exchangesService.getAllExchangesForParticipant().subscribe(requestData => {
          this.loadedStudent.exchange_requests = requestData.data;
        });
      }
      if (this.loadedStudent.email_verified_at == null) {
        this.buttonPressed = false;
      }
    });
  }

  refresh() {
    this.getStudent();
    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });
  }

  logout() {
    this.studentsService.logOutStudent();
  }

  sendVerificationEmail() {
    this.studentsService.sendAuthentificationEmailSubscribe().subscribe(data => {
      this.alert.alert(data.message);
      this.buttonPressed = true;
    }, error => {
      this.alert.error('Versandt der Verifizierungs E-Mail fehlgeschlagen!', error.error);
    });
  }

}
