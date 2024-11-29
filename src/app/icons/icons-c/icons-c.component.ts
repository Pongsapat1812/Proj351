import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-icons-c',
  templateUrl: './icons-c.component.html',
  styleUrls: ['./icons-c.component.css']
})

export class IconsCComponent {
  showNote = false;
  constructor(public AuthService: AuthService) {}
  isAuthorized() {
    return this.AuthService.isAuthorized();
  }
  openNote() {
    if (this.isAuthorized()) {
      this.showNote = !this.showNote;
    }
  }

}