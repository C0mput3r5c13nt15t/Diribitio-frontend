import { Component, OnInit } from '@angular/core';
import { ExchangesService } from 'src/app/exchanges.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { Exchange } from 'src/assets/models/Exchange.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-exchanges',
  templateUrl: './admin-exchanges.page.html',
  styleUrls: ['./admin-exchanges.page.scss'],
})
export class AdminExchangesPage implements OnInit {
  private subscriptions: Subscription[] = [];

  adminUrl: string;

  exchanges = [];
  loadedExchanges: Exchange[];

  text1: string;
  text2: string;
  text3: string;
  text4: string;

  eventName = this.config.app_config.event_name;

  constructor(private exchangesService: ExchangesService,
              private activatedRoute: ActivatedRoute,
              private config: ConfigService) { }

  ngOnInit() {
    this.text1 = this.config.get_content_by_index('admin-exchanges', 0);
    this.text2 = this.config.get_content_by_index('admin-exchanges', 1);
    this.text3 = this.config.get_content_by_index('admin-exchanges', 2);
    this.text4 = this.config.get_content_by_index('admin-exchanges', 3);

    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.adminUrl = paramMap.get('AdminName');
    });

    this.subscriptions.push(
      this.exchangesService.update.subscribe(() => this.getAllExchanges())
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  getAllExchanges() {
    this.exchangesService.getAllexchanges().subscribe(data => {
      this.loadedExchanges = data.data;
    });
  }

}
