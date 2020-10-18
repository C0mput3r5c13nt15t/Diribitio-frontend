import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-imprint-data-protection',
  templateUrl: './imprint-data-protection.page.html',
  styleUrls: ['./imprint-data-protection.page.scss'],
})
export class ImprintDataProtectionPage implements OnInit {
  contacts = [];
  conditions = '';
  dataProtection = '';
  contents = [];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.contacts = this.config.imprint.contacts;
    this.conditions = this.config.conditions.full_conditions;
    this.dataProtection = this.config.data_protection.data_protection;
  }

}
