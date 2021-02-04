import { Component, HostListener } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SettingsService } from './services/settings.service';
import { ScreensizeService } from './services/screensize.service';
import { AlertService } from './services/alert.service';
import { CookieService } from 'ngx-cookie-service';
import { ConfigService } from './services/config.service';

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
  /**
   * Conatins the subscription for a regular interval
   */
  private regularInterval: Subscription;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private settings: SettingsService,
    private screensizeService: ScreensizeService,
    private alert: AlertService,
    private cookieService: CookieService,
    private config: ConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.screensizeService.onResize(this.platform.width());
      this.changeColor();
      this.settings.update.subscribe(() => {
        this.changeColor();
      });
    });
    if (!this.cookieService.get('Diribitio-AgreedOn')) {
      this.alert.agreements();
    }
  }

  changeColor() {
    const colorAndBackground = this.settings.theme.split('-', 2);
    let background = colorAndBackground[0];
    const color = colorAndBackground[1];
    const now = new Date();
    if (background === 'auto') {
      if (this.config.ui.night_start_hour <= now.getHours() ||  now.getHours() < this.config.ui.night_end_hour) {
        background = 'dark';
        const source = interval(60 * 1000); // Every 1 Minute
        this.regularInterval = source.subscribe(() => this.changeColor());
      } else {
        background = 'light';
        const source = interval(60 * 1000); // Every 1 Minute
        this.regularInterval = source.subscribe(() => this.changeColor());
      }
    } else {
      if (this.regularInterval) {
        this.regularInterval.unsubscribe();
      }
    }
    this.theme = background + '-' + color + ' hydrated';
  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
}
