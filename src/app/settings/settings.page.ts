import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import { ConfigService } from '../config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
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

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  change() {
    this.settings.change_theme(this.background, this.color);
  }

}
