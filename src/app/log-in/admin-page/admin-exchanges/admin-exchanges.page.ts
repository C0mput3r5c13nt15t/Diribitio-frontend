import { Component, OnInit } from '@angular/core';
import { ExchangesService } from 'src/app/exchanges.service';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from 'src/app/config.service';
import { Tausch } from 'src/assets/models/Tausch.model';

@Component({
  selector: 'app-admin-exchanges',
  templateUrl: './admin-exchanges.page.html',
  styleUrls: ['./admin-exchanges.page.scss'],
})
export class AdminExchangesPage implements OnInit {
  adminUrl: string;

  exchanges = [];
  loadedExchanges: Tausch[];

  text1: string;
  text2: string;
  text3: string;
  text4: string;

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

    this.getAllExchanges();
    this.exchangesService.update.subscribe(() => this.getAllExchanges());
  }

  getAllExchanges() {
    this.exchangesService.getAllexchanges().subscribe(data => {
      this.loadedExchanges = data.data;
    });
  }

}
