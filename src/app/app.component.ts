import { Component, HostListener } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './services/settings.service';
import { ScreensizeService } from './services/screensize.service';
import { AlertService } from './services/alert.service';
import { CookieService } from 'ngx-cookie-service';

/**
 * @ignore
 */
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
    private alert: AlertService,
    private cookieService: CookieService
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
    if (!this.cookieService.get('Diribitio-AgreedOn')) {
      this.alert.agreements();
    }
  }

  changeColor() {
    this.theme = this.settings.theme + ' hydrated';
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
