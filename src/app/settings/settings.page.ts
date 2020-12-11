import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { ConfigService } from 'src/app/services/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  background = 'dark';
  color = 'blue';
  text1: string;
  text2: string;


  constructor(private settings: SettingsService,
              private config: ConfigService) { }

  ngOnInit() {
    this.text1 = this.config.get_content_by_index('settings', 0);
    this.text2 = this.config.get_content_by_index('settings', 1);

    const theme = this.settings.theme;
    const colorandbackground = theme.split('-', 2);
    this.background = colorandbackground[0];
    this.color = colorandbackground[1];
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  change() {
    this.settings.change_theme(this.background, this.color);
  }

}
