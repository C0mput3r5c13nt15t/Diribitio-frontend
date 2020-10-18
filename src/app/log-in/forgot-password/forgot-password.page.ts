import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config.service';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  formType = 'students';

  forgotPasswordData = {
    email: '',
    user_type: 'students'
  };

  text: string;

  projectNoun: string;

  constructor(private config: ConfigService,
              private auth: AuthenticationService) { }

  ngOnInit() {
    this.projectNoun = this.config.app_config.project_noun;

    this.text = this.config.get_content('forgot-password');
  }

  sendPasswordEmail() {
    this.forgotPasswordData.user_type = this.formType;
    this.auth.forgotPassword(this.forgotPasswordData);
  }

}
