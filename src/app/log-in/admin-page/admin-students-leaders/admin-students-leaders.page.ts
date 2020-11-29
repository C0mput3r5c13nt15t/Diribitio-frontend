import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service';
import { LeadersService } from 'src/app/leaders.service';
import { ProjectsService } from 'src/app/projects.service';
import { AlertController } from '@ionic/angular';
import { Schedule } from 'src/assets/models/Schedule.model';
import { AdminsService } from 'src/app/admins.service';
import { AlertService } from 'src/app/alert.service';
import { ConfigService } from 'src/app/config.service';
import { Project } from 'src/assets/models/Project.model';
import { ScheduleService } from 'src/app/schedule.service';
import { Time } from '@angular/common';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';

export interface ModifiedSchüler {
  id: number;
  first_name: string;
  last_name: string;
  grade: number;
  letter: string;
  exchange_requests?: any[];
  first_friend: number;
  first_friend_name: string;
  second_friend: number;
  second_friend_name: string;
  third_friend: number;
  third_friend_name: string;
  first_wish: number;
  first_wish_title: string;
  second_wish: number;
  second_wish_title: string;
  third_wish: number;
  third_wish_title: string;
  project_id: number;
  project_title?: string;
  role: number;
}

export interface ModifiedProjektleiter {
  id: number;
  user_name: string;
  email: string;
  project_id: number;
  project_title?: string;
  email_verified_at?: Time;
}

@Component({
  selector: 'app-admin-students-leaders',
  templateUrl: './admin-students-leaders.page.html',
  styleUrls: ['./admin-students-leaders.page.scss'],
})
export class AdminStudentsLeadersPage implements OnInit {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  loadedProjects: Project[] = [];
  loadedParticipantsNames: any[] = [];

  sortedProjects: Project[] = [];
  searchStudents: ModifiedSchüler[];
  loadedStudents: ModifiedSchüler[] = [];
  loadedLeaders: ModifiedProjektleiter[] = [];

  sorted = false;

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

  currentDate: any;

  searchValue: string;
  text1 = this.config.get_content_by_index('admin-students-leaders', 0);
  text2 = this.config.get_content_by_index('admin-students-leaders', 1);
  text3 = this.config.get_content_by_index('admin-students-leaders', 2);
  text4 = this.config.get_content_by_index('admin-students-leaders', 3);

  page = 1;
  lastPage = 1;

  projectNoun = this.config.app_config.project_noun;
  projectsNoun = this.config.app_config.projects_noun;
  eventName = this.config.app_config.event_name;

  constructor(private studentsService: StudentsService,
              private scheduleService: ScheduleService,
              private leadersService: LeadersService,
              private projectsService: ProjectsService,
              private activatedRoute: ActivatedRoute,
              private alertCtrl: AlertController,
              private adminsService: AdminsService,
              private alert: AlertService,
              private config: ConfigService) { }

  ngOnInit() {
    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.load();

    this.subscriptions.push(
      this.studentsService.update.subscribe(() => this.load()),
      this.leadersService.update.subscribe(() => this.load()),
      this.projectsService.update.subscribe(() => this.load())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  load() {
    this.alert.loading(2000);

    this.page = 1;

    this.scheduleService.getSchedule().subscribe(data => {
      this.schedule = data.data;
    });

    this.getProjects();
    this.getAllStudentNames();

    if (this.currentDate > this.schedule.sort_students && this.currentDate <= this.schedule.exchange) {
      this.requestSortingProposal();
    }
  }

  eventHandler(keyCode) {
    if (keyCode === 13) {
      this.search();
    }
  }

  search() {
    // tslint:disable-next-line: triple-equals
    if (this.searchValue == '') {
      this.searchStudents = null;
      return;
    }
    this.studentsService.getAllSearchedStudents(this.searchValue).subscribe(data => {
      this.searchStudents = [];
      data.data.forEach(async student => {
        const stu: ModifiedSchüler = {
          id: 0,
          first_name: '',
          last_name: '',
          grade: 1,
          letter: '',
          first_friend: 0,
          first_friend_name: '',
          second_friend: 0,
          second_friend_name: '',
          third_friend: 0,
          third_friend_name: '',
          first_wish: 0,
          first_wish_title: '',
          second_wish: 0,
          second_wish_title: '',
          third_wish: 0,
          third_wish_title: '',
          project_id: 0,
          project_title: 'kein Projekt',
          role: 1
        };

        stu.id = student.id;
        stu.first_name = student.first_name;
        stu.last_name = student.last_name;
        stu.grade = student.grade;
        stu.letter = student.letter;
        stu.first_friend = student.first_friend;
        stu.second_friend = student.second_friend;
        stu.third_friend = student.third_friend;
        stu.first_wish = student.first_wish;
        stu.second_wish = student.second_wish;
        stu.third_wish = student.third_wish;
        stu.project_id = student.project_id;
        stu.role = student.role;

        stu.first_friend_name = this.getParticipantName(stu.first_friend);
        stu.second_friend_name = this.getParticipantName(stu.second_friend);
        stu.third_friend_name = this.getParticipantName(stu.third_friend);

        stu.first_wish_title = this.getProjectTitle(stu.first_wish);
        stu.second_wish_title = this.getProjectTitle(stu.second_wish);
        stu.third_wish_title = this.getProjectTitle(stu.third_wish);
        stu.project_title = this.getProjectTitle(stu.project_id);

        this.searchStudents.push(stu);
      });
    });
  }

  refresh() {
    this.page = 1;
    this.getProjects();
    this.getAllStudentNames();
  }

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.loadedProjects = data.data;
      this.getStudents();
      this.getLeaders();
    });
  }

  getAllStudentNames() {
    this.studentsService.getAllStudentNames().subscribe(data => {
      this.loadedParticipantsNames = data.data;
    });
  }

  getStudents() {
    this.loadedStudents = [];
    this.studentsService.getAllStudents(this.page).subscribe(data => {
      this.lastPage = data.meta.last_page;
      data.data.forEach(async student => {
        const stu: ModifiedSchüler = {
          id: 0,
          first_name: '',
          last_name: '',
          grade: 1,
          letter: '',
          first_friend: 0,
          first_friend_name: '',
          second_friend: 0,
          second_friend_name: '',
          third_friend: 0,
          third_friend_name: '',
          first_wish: 0,
          first_wish_title: '',
          second_wish: 0,
          second_wish_title: '',
          third_wish: 0,
          third_wish_title: '',
          project_id: 0,
          project_title: 'kein Projekt',
          role: 1
        };

        stu.id = student.id;
        stu.first_name = student.first_name;
        stu.last_name = student.last_name;
        stu.grade = student.grade;
        stu.letter = student.letter;
        stu.first_friend = student.first_friend;
        stu.second_friend = student.second_friend;
        stu.third_friend = student.third_friend;
        stu.first_wish = student.first_wish;
        stu.second_wish = student.second_wish;
        stu.third_wish = student.third_wish;
        stu.project_id = student.project_id;
        stu.role = student.role;

        stu.first_friend_name = this.getParticipantName(stu.first_friend);
        stu.second_friend_name = this.getParticipantName(stu.second_friend);
        stu.third_friend_name = this.getParticipantName(stu.third_friend);

        stu.first_wish_title = this.getProjectTitle(stu.first_wish);
        stu.second_wish_title = this.getProjectTitle(stu.second_wish);
        stu.third_wish_title = this.getProjectTitle(stu.third_wish);
        stu.project_title = this.getProjectTitle(stu.project_id);

        // await this.getWishNames(stu.first_wish, stu.second_wish, stu.third_wish, stu);

        // await this.getFriendsNames(stu.first_friend, stu.second_friend, stu.third_friend, stu);

        this.loadedStudents.push(stu);
      });
    });
  }

  getMoreStudents() {
    this.alert.loading(2000);
    this.page += 1;
    this.studentsService.getAllStudents(this.page).subscribe(data => {
      data.data.forEach(async student => {
        const stu: ModifiedSchüler = {
          id: 0,
          first_name: '',
          last_name: '',
          grade: 1,
          letter: '',
          first_friend: 0,
          first_friend_name: '',
          second_friend: 0,
          second_friend_name: '',
          third_friend: 0,
          third_friend_name: '',
          first_wish: 0,
          first_wish_title: '',
          second_wish: 0,
          second_wish_title: '',
          third_wish: 0,
          third_wish_title: '',
          project_id: 0,
          project_title: 'kein Projekt',
          role: 1
        };

        stu.id = student.id;
        stu.first_name = student.first_name;
        stu.last_name = student.last_name;
        stu.grade = student.grade;
        stu.letter = student.letter;
        stu.first_friend = student.first_friend;
        stu.second_friend = student.second_friend;
        stu.third_friend = student.third_friend;
        stu.first_wish = student.first_wish;
        stu.second_wish = student.second_wish;
        stu.third_wish = student.third_wish;
        stu.project_id = student.project_id;
        stu.role = student.role;

        stu.first_friend_name = this.getParticipantName(stu.first_friend);
        stu.second_friend_name = this.getParticipantName(stu.second_friend);
        stu.third_friend_name = this.getParticipantName(stu.third_friend);

        stu.first_wish_title = this.getProjectTitle(stu.first_wish);
        stu.second_wish_title = this.getProjectTitle(stu.second_wish);
        stu.third_wish_title = this.getProjectTitle(stu.third_wish);
        stu.project_title = this.getProjectTitle(stu.project_id);

        this.loadedStudents.push(stu);
      });
    });
  }

  getLeaders() {
    this.loadedLeaders = [];
    this.leadersService.getAllLeaders().subscribe(data => {
      data.data.forEach(leader => {
        const lea: ModifiedProjektleiter = {
          id: 0,
          user_name: '',
          email: '',
          project_id: 0,
          project_title: 'kein Projekt'
        };

        lea.id = leader.id;
        lea.user_name = leader.user_name;
        lea.email = leader.email;
        lea.project_id = leader.project_id;

        lea.project_title = this.getProjectTitle(lea.project_id);

        this.loadedLeaders.push(lea);
      });
    });
  }

  getProjectTitle(projectID) {
    if (projectID !== 0 && this.loadedProjects) {
      const searchedProject = this.loadedProjects.filter(
        project => project.id === projectID);
      if (searchedProject[0] != null) {
        return searchedProject[0].title;
      } else {
        return 'fehlerhaftes Projekt';
      }
    } else {
      return 'kein Projekt';
    }
  }

  getParticipantName(participantID) {
    if (participantID !== 0 && this.loadedParticipantsNames) {
      const searchedParticipant = this.loadedParticipantsNames.filter(
        participant => participant.id === participantID);
      if (searchedParticipant[0] != null) {
        return searchedParticipant[0].first_name + ' ' + searchedParticipant[0].last_name;
      } else {
        return 'fehlerhafter Freund';
      }
    } else {
      return '';
    }
  }

  deleteLeader(leaderID) {
    this.alertCtrl.create({
      header: 'Sind sie sicher?',
      message: 'Wollen sie diesen Projektleiter wirklich unwiederruflich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.leadersService.deleteLeader(leaderID);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  createSortingProposal() {
    this.adminsService.createSortingProposal().subscribe(data => {
      this.alert.alert(data.message);
      this.sorted = true;
      this.sortedProjects = data.data;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alert.error('Sortierung der Schüler fehlgeschlagen.', error.error);
    });
  }

  requestSortingProposal() {
    this.adminsService.requestSortingProposal().subscribe(data => {
      this.sortedProjects = data.data;
      this.sorted = true;
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alert.error('Es konnte kein Sortiervorschlag gefunden werden.', error.error);
    });
  }

  moveParticipant(event) {
    const participant = event.detail.value[0];
    const oldProjectId = event.detail.value[1];
    const newProjectId = event.detail.value[2];

    if (oldProjectId !== 0 && this.sortedProjects) {
      const searchedProject = this.sortedProjects.filter(
        project => project.id === oldProjectId);
      if (searchedProject[0] != null) {
        const oldProject = searchedProject[0];

        const index = oldProject.participants.indexOf(participant);
        if (index !== -1) {
          oldProject.participants.splice(index, 1);
        }
      }
    }

    if (newProjectId !== 0 && this.sortedProjects) {
      const searchedProject = this.sortedProjects.filter(
        project => project.id === newProjectId);
      if (searchedProject[0] != null) {
        const newProject = searchedProject[0];

        if (participant) {
          newProject.participants.push(participant);
        }
      }
    }
  }

  editSortingProposal() {
    const newProposal = {
      data: this.sortedProjects
    };
    this.adminsService.editSortingProposal(newProposal);
    // this.requestSortingProposal();
    this.sorted = true;
  }

  applySortingProposal() {
    if (this.sorted === true) {
      this.alertCtrl.create({
        header: 'Sind sie sicher?',
        message: 'Wollen sie die vorgeschlagene Konfiguration wirklich anwenden?',
        buttons: [{
          text: 'Abbrechen',
          role: 'cancel'
        }, {
          text: 'Anwenden',
          handler: () => {
            this.adminsService.applySortingProposal();
            this.sorted = false;
            this.refresh();
          }
        }]
      }).then(alertEl => {
        alertEl.present();
      });
    }
  }

}
