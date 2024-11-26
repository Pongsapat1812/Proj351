import { Component } from '@angular/core';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {
  isLoginVisible = false;
  isRegisterVisible = false;
  closeRegister() {
    this.isRegisterVisible = false;
  }
  closeLogin() {
    this.isLoginVisible = false;
  }
  toggle(form: string) {
    if (form === 'login') {
      this.isRegisterVisible = false;
      this.isLoginVisible = true;
    } else if (form === 'register') {
      this.isLoginVisible = false;
      this.isRegisterVisible = true;
    }
  }

}