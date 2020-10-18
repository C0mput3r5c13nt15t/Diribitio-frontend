import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {
  instructions = [];

  constructor(private config: ConfigService) { }

  ngOnInit() {
    this.instructions = this.config.help.instructions;
  }

}
