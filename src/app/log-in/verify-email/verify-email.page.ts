import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ConfigService } from 'src/app/config.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {
  private subscriptions: Subscription[] = [];

  status = 200;

  mailStatusNotfound: string;

  contents;
  title = '';
  descr = '';

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private config: ConfigService) { }

  ngOnInit() {
    this.mailStatusNotfound = this.config.get_error('mail_status_not_found');

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('Status')) {
        this.router.navigate(['']);
        return;
      } else {
        try {
          // tslint:disable-next-line: max-line-length
          this.contents = this.config.get_mail_status_descr('email-verification', this.activatedRoute.snapshot.paramMap.get('Status').toString());
          this.title = this.contents.title;
          this.descr = this.contents.descr;
        } catch {
          this.title = 'Es gab einen Fehler.';
          this.descr = this.mailStatusNotfound;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
