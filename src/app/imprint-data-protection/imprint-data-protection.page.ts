import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-imprint-data-protection',
  templateUrl: './imprint-data-protection.page.html',
  styleUrls: ['./imprint-data-protection.page.scss'],
})
export class ImprintDataProtectionPage implements OnInit {
  private subscriptions: Subscription[] = [];

  contacts = this.config.imprint.contacts;
  conditions = this.config.conditions.full_conditions;
  dataProtection = this.config.data_protection.data_protection;

  constructor(private config: ConfigService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
