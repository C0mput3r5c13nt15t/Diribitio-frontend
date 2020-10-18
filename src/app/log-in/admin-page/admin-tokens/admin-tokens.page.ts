import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-tokens',
  templateUrl: './admin-tokens.page.html',
  styleUrls: ['./admin-tokens.page.scss'],
})
export class AdminTokensPage implements OnInit {

  constructor() { }

  ngOnInit() {
    /*this.text = this.config.get_content('admin-tokens');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });
    this.getTokens();

    this.adminsService.update.subscribe(() => this.getTokens());
  */
  }

  /*
  getTokens() {
    this.adminsService.getAllTokens().subscribe(data => {
      this.signUpTokens = data.data;
    });
  }

  generateTokens() {
    if (this.count > 0 && this.count <= 1000) {
      this.adminsService.createTokens(this.count).subscribe(data => {
        this.signUpTokens.push(data.data);
        this.alert.alert(data.message);
        this.adminsService.update.emit();
      }, error => {
        this.alert.error('Erstellung der Tokens fehlgeschlagen!', error.error);
      });
    } else {
      this.alertCtrl.create({
        header: 'Fehler',
        message: 'Die angegebene Anzahl ist zu groß oder zu klein!',
        buttons: [{
          text: 'Ok',
          role: 'cancel',
          }]
        }).then(alertEl => {
          alertEl.present();
        });
    }
  }

  deleteTokens() {
    this.alertCtrl.create({
      header: 'Sind sie sicher?',
      message: 'Wollen sie wirklich alle Tokens unwiederruflich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      }, {
        text: 'Löschen',
        handler: () => {
          this.adminsService.deleteAllTokens().subscribe(data => {
            this.signUpTokens = [];
            this.alert.alert(data.message);
            this.adminsService.update.emit();
          }, error => {
            this.alert.error('Löschen des Tokens fehlgeschlagen!', error.error);
          });
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

  print() {
    console.log('Geht nicht');
  }
  */

}
