import { Component,ViewChild } from '@angular/core';
import { UserLogComponent } from '../../authentication/user-log/user-log.component';

@Component({
  selector: 'app-sec-e',
  templateUrl: './sec-e.component.html',
  styleUrls: ['./sec-e.component.css']
})
export class SecEComponent {
  @ViewChild(UserLogComponent) UserLogComponent!: UserLogComponent;

  openLogin() {
    this.UserLogComponent.openLogin();
  }

}