import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  formType = 'students';

  forgotPasswordData = {
    email: '',
    user_type: 'students'
  };

  text: string;

  projectNoun = this.config.app_config.project_noun;
  /**
   * Conatins the name of the event that the application is used for
   */
  eventName = this.config.app_config.event_name;

  constructor(private config: ConfigService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.text = this.config.get_content('forgot-password');
  }

  /**
   * Unsubscribes from all events when the page is unloaded
   */
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  sendPasswordEmail() {
    this.forgotPasswordData.user_type = this.formType;
    this.auth.forgotPassword(this.forgotPasswordData);
  }

}
