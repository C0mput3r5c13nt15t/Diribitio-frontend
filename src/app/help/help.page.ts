import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;
  /**
   * Contains the instructions for using the application
   */
  instructions = this.config.help.instructions;

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
