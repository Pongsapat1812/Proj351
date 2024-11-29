import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css'],
})

export class UserLogComponent {
  showLogin = false;
  isLogin = true;
  email: string = '';
  password: string = '';
  showCredential: boolean = false;
  constructor(private AuthService: AuthService) {}
  openLogin() {
    this.showLogin = true;
    this.isLogin = true;
  }
  closeLogin() {
    this.showLogin = false;
  }
  auth() {
    this.isLogin = !this.isLogin;
    this.email = '';
    this.password = '';
  }
  submit() {
    if (this.isLogin) {
      this.AuthService.login();
    } else {
    }
    this.email = '';
    this.password = '';
    this.closeLogin();
  }
  toggle(): void {
    this.showCredential = !this.showCredential;
  }
  
}