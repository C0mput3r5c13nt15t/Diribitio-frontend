import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';
import { AlertController } from '@ionic/angular';
import { Student } from 'src/models/Student.model';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  loadedProjects = [];
  possibleProjects = [];
  students;
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
  appendFriend: any = {
    id: 0,
    first_name: '',
    last_name: '',
    grade: 0,
    letter: '',
  };
  friendsList = [];
  lowestGrade: number;
  highestGrade: number;

  text: string;

  definiteArticle = this.config.definite_article;
  indefiniteArticle = this.config.indefinite_article.toLowerCase();
  projectsNoun = this.config.app_config.projects_noun;
  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private projectsService: ProjectsService,
              private studentsService: StudentsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private alertCtrl: AlertController,
              private config: ConfigService ) { }

  ngOnInit() {
    this.text = this.config.get_content('student-registration');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.studentUrl = paramMap.get('ParticipantName');
    });

    this.getProjects();
    this.getStudent();

    this.subscriptions.push(
      this.projectsService.update.subscribe(() => this.getProjects()),
      this.studentsService.update.subscribe(() => this.getStudent())
    );
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getStudent() {
    this.studentsService.getSelfStudent().subscribe(data => {
      this.loadedStudent = data.data;
      this.lowestGrade = +data.data.grade;
      this.highestGrade = +data.data.grade;

      this.friendsList = [];

      this.studentsService.getFriends().subscribe(friendData => {
        this.friendsList = friendData.data;

        this.friendsList.forEach((friend) => {
          if (+friend.grade <= this.lowestGrade) {
            this.lowestGrade = +friend.grade;
          }

          if (+friend.grade >= this.highestGrade) {
            this.highestGrade = +friend.grade;
          }
          this.filterProjects();
        });
      });
    });
  }

  userChanges() {
    this.lowestGrade = +this.loadedStudent.grade;
    this.highestGrade = +this.loadedStudent.grade;

    this.friendsList.forEach((friend) => {
      if (+friend.grade <= this.lowestGrade) {
        this.lowestGrade = +friend.grade;
      }

      if (+friend.grade >= this.highestGrade) {
        this.highestGrade = +friend.grade;
      }
    });
    this.filterProjects();
  }

  getProjects() {
    this.projectsService.getAllProjects().subscribe(data => {
      this.loadedProjects = data.data;
    });
  }

  validateProject(project) {
    if (this.lowestGrade >= +project.min_grade) {
      if (+project.max_grade >= this.highestGrade) {
        if (project.id !== this.loadedStudent.project_id) {
          if (project.authorized) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  filterProjects() {
    this.possibleProjects = [];
    // console.log(this.lowestGrade);
    this.loadedProjects.forEach(project => {
      if (this.validateProject(project)) {
        // console.log(project.max_grade);
        this.possibleProjects.push(project);
      }
    });
  }

  appendFriendFunction() {
    this.studentsService.getStudentID(this.appendFriend).subscribe(data => {
      // tslint:disable-next-line: triple-equals
      if (data.id != 0) {
        this.appendFriend.id = data.id;

        if (this.friendsList.length < 3  &&  !this.friendsList.some(e => e.id === data.id))  {
          this.friendsList.push(JSON.parse(JSON.stringify(this.appendFriend)));
          console.log(this.friendsList);

          if (+this.appendFriend.grade <= this.lowestGrade) {
            this.lowestGrade = +this.appendFriend.grade;
          }

          if (+this.appendFriend.grade >= this.highestGrade) {
            this.highestGrade = +this.appendFriend.grade;
          }
        }

        this.filterProjects();
      } else {
        this.alertCtrl.create({
          header: 'Fehler',
          message: 'Der angegebene Schüler konnte nicht gefunden werden!',
          buttons: [{
            text: 'Ok',
            role: 'cancel',
            }]
          }).then(alertEl => {
            alertEl.present();
          });
      }
    });
  }

  removeFriendFunction(friend) {
    this.friendsList.splice(this.friendsList.indexOf(friend), 1);

    this.lowestGrade = +this.loadedStudent.grade;
    this.highestGrade = +this.loadedStudent.grade;

    this.friendsList.forEach(stillfriend => {
      if (+stillfriend.grade < this.lowestGrade) {
        this.lowestGrade = +stillfriend.grade;
      }

      if (+stillfriend.grade > this.highestGrade) {
        this.highestGrade = +stillfriend.grade;
      }
    });

    this.filterProjects();
  }

  registrate() {
    // tslint:disable-next-line: triple-equals
    if (this.loadedStudent.first_wish != this.loadedStudent.project_id && this.loadedStudent.second_wish != this.loadedStudent.project_id && this.loadedStudent.third_wish != this.loadedStudent.project_id) {
      if (this.loadedStudent.first_wish !== this.loadedStudent.second_wish && this.loadedStudent.first_wish !== this.loadedStudent.third_wish && this.loadedStudent.second_wish !== this.loadedStudent.third_wish) {
        if (this.friendsList.length === 3) {
          this.loadedStudent.first_friend = this.friendsList[0].id;
          this.loadedStudent.second_friend = this.friendsList[1].id;
          this.loadedStudent.third_friend = this.friendsList[2].id;
          this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
        } else if (this.friendsList.length === 2) {
          this.loadedStudent.first_friend = this.friendsList[0].id;
          this.loadedStudent.second_friend = this.friendsList[1].id;
          this.loadedStudent.third_friend = 0;
          this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
        } else if (this.friendsList.length === 1) {
          this.loadedStudent.first_friend = this.friendsList[0].id;
          this.loadedStudent.second_friend = 0;
          this.loadedStudent.third_friend = 0;
          this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
        } else {
          this.loadedStudent.first_friend = 0;
          this.loadedStudent.second_friend = 0;
          this.loadedStudent.third_friend = 0;
          this.studentsService.putSelfStudent(this.loadedStudent, this.studentUrl);
        }
      } else {
        this.alertCtrl.create({
          header: 'Fehler',
          message: 'Du must drei verschiedene Projektwünsche angeben!',
          buttons: [{
            text: 'Ok',
            role: 'cancel',
            }]
          }).then(alertEl => {
            alertEl.present();
          });
      }
    } else {
      this.alertCtrl.create({
        header: 'Fehler',
        message: 'Du kannst nicht an deinem eigenen Projekt teilnehmen!',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          }]
        }).then(alertEl => {
          alertEl.present();
        });
    }
  }

}
