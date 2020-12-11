import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-imprint-data-protection',
  templateUrl: './imprint-data-protection.page.html',
  styleUrls: ['./imprint-data-protection.page.scss'],
})
export class ImprintDataProtectionPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  /**
   * Conatins all the contact information of imprint.json
   */
  contacts = this.config.imprint.contacts;
  /**
   * Conatins all the terms of condition from the conditions.json
   */
  conditions = this.config.conditions.full_conditions;
  /**
   * Conatins all the data protection information from the data-protection.json
   */
  dataProtection = this.config.data_protection.data_protection;

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
