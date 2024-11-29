import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-icons-d',
  templateUrl: './icons-d.component.html',
  styleUrl: './icons-d.component.css'
})

export class IconsDComponent {
  showSetting = false;
  constructor(public AuthService: AuthService) {}
  isAuthorized() {
    return this.AuthService.isAuthorized();
  }
  openSetting() {
    if (this.isAuthorized()) {
      this.showSetting = !this.showSetting;
    }
  }
}