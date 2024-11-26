import { Component } from '@angular/core';

@Component({
  selector: 'app-user-log',
  templateUrl: './user-log.component.html',
  styleUrls: ['./user-log.component.css']
})
export class UserLogComponent {
  isPopupVisible = false;
  isLogin = true;
  openLogin() {
    this.isPopupVisible = true;
    this.isLogin = true;
  }
  closePopup() {
    this.isPopupVisible = false;
  }
  toggle() {
    this.isLogin = !this.isLogin;
  }

}