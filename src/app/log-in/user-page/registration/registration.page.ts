import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParticipantsService } from 'src/app/participants.service';
import { AlertController } from '@ionic/angular';
import { Schüler } from 'src/assets/models/Schüler.model';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  loadedProjects = [];
  possibleProjects = [];
  students;
  participantUrl;
  loadedUser: Schüler = {
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

  definiteArticle: string;
  indefiniteArticle: string;
  projectsNoun: string;
  projectNoun: string;

  constructor(private projectsService: ProjectsService,
              private participantsService: ParticipantsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private alertCtrl: AlertController,
              private config: ConfigService ) { }

  ngOnInit() {
    this.definiteArticle = this.config.definite_article;
    this.indefiniteArticle = this.config.indefinite_article.toLowerCase();
    this.projectsNoun = this.config.app_config.projects_noun;
    this.projectNoun = this.config.app_config.project_noun;

    this.text = this.config.get_content('user-registration');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('ParticipantName')) {
        this.router.navigate(['']);
        return;
      }
      this.participantUrl = paramMap.get('ParticipantName');
    });
    this.getProjects();
    this.projectsService.update.subscribe(() => this.getProjects());
    this.getUser();
    this.participantsService.update.subscribe(() => this.getUser());
  }

  ionViewWillEnter() {
    this.getUser();
  }

  getUser() {
    this.participantsService.getSelfParticipant().subscribe(data => {
      this.loadedUser = data.data;
      this.lowestGrade = +data.data.grade;
      this.highestGrade = +data.data.grade;

      this.friendsList = [];

      this.participantsService.getFriends().subscribe(friendData => {
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
    this.lowestGrade = +this.loadedUser.grade;
    this.highestGrade = +this.loadedUser.grade;

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
    // tslint:disable-next-line: max-line-length
    if (this.lowestGrade >= +project.min_grade) {
      if (+project.max_grade >= this.highestGrade) {
        if (project.id !== this.loadedUser.project_id) {
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
    this.participantsService.getParticipantID(this.appendFriend).subscribe(data => {
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

    this.lowestGrade = +this.loadedUser.grade;
    this.highestGrade = +this.loadedUser.grade;

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
    // tslint:disable-next-line: max-line-length tslint:disable-next-line: triple-equals
    if (this.loadedUser.first_wish != this.loadedUser.project_id && this.loadedUser.second_wish != this.loadedUser.project_id && this.loadedUser.third_wish != this.loadedUser.project_id) {
      // tslint:disable-next-line: max-line-length
      if (this.loadedUser.first_wish !== this.loadedUser.second_wish && this.loadedUser.first_wish !== this.loadedUser.third_wish && this.loadedUser.second_wish !== this.loadedUser.third_wish) {
        if (this.friendsList.length === 3) {
          this.loadedUser.first_friend = this.friendsList[0].id;
          this.loadedUser.second_friend = this.friendsList[1].id;
          this.loadedUser.third_friend = this.friendsList[2].id;
          this.participantsService.putSelfParticipant(this.loadedUser);
          this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
        } else if (this.friendsList.length === 2) {
          this.loadedUser.first_friend = this.friendsList[0].id;
          this.loadedUser.second_friend = this.friendsList[1].id;
          this.loadedUser.third_friend = 0;
          this.participantsService.putSelfParticipant(this.loadedUser);
          this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
        } else if (this.friendsList.length === 1) {
          this.loadedUser.first_friend = this.friendsList[0].id;
          this.loadedUser.second_friend = 0;
          this.loadedUser.third_friend = 0;
          this.participantsService.putSelfParticipant(this.loadedUser);
          this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
        } else {
          this.loadedUser.first_friend = 0;
          this.loadedUser.second_friend = 0;
          this.loadedUser.third_friend = 0;
          this.participantsService.putSelfParticipant(this.loadedUser);
          this.router.navigate(['Projekttage/Benutzer/' + this.participantUrl]);
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
