import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-icons-e',
  templateUrl: './icons-e.component.html',
  styleUrl: './icons-e.component.css'
})

export class IconsEComponent {
  constructor(public AuthService: AuthService) {}
  isAuthorized() {
    return this.AuthService.isAuthorized();
  }
  logout() {
    this.AuthService.logout();
  }

}