import { Component,ViewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UserLogComponent } from '../../authentication/user-log/user-log.component';

@Component({
  selector: 'app-sec-a',
  templateUrl: './sec-a.component.html',
  styleUrls: ['./sec-a.component.css']
})
export class SecAComponent {
  @ViewChild(UserLogComponent) UserLogComponent!: UserLogComponent;
  constructor(public AuthService: AuthService) {}
  openLogin() {
    this.UserLogComponent.openLogin();
  }
  
}