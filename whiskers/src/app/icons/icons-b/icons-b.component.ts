import { Component,ViewChild } from '@angular/core';
import { UserLogComponent } from '../../authentication/user-log/user-log.component';

@Component({
  selector: 'app-icons-b',
  templateUrl: './icons-b.component.html',
  styleUrl: './icons-b.component.css'
})
export class IconsBComponent {
  @ViewChild(UserLogComponent) UserLogComponent!: UserLogComponent;

  openLogin() {
    this.UserLogComponent.openLogin();
  }

}