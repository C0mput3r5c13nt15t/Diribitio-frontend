import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './settings.service';
import { ScreensizeService } from './screensize.service';
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  theme = 'dark-blue';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingsService,
    private screensizeService: ScreensizeService,
    private alert: AlertService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
      this.theme = this.settings.theme + ' hydrated';
      this.settings.update.subscribe(() => {
        this.changeColor();
      });
    });
    this.alert.agreements();
  }

  changeColor() {
    this.theme = this.settings.theme + ' hydrated';
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
