import { Component,ViewChild } from '@angular/core';
import { UserLogComponent } from '../../authentication/user-log/user-log.component';

@Component({
  selector: 'app-sec-a',
  templateUrl: './sec-a.component.html',
  styleUrls: ['./sec-a.component.css']
})
export class SecAComponent {
  @ViewChild(UserLogComponent) UserLogComponent!: UserLogComponent;

  openLogin() {
    this.UserLogComponent.openLogin();
  }
  
}