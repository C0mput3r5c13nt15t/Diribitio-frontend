import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  private subscriptions: Subscription[] = [];

  eventName = this.config.app_config.event_name;
  instructions = this.config.help.instructions;

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
