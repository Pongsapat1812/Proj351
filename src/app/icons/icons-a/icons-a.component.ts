import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-icons-a',
  templateUrl: './icons-a.component.html',
  styleUrls: ['./icons-a.component.css'],
})
export class IconsAComponent {
  target: string[] = ['#a'];
  constructor(private AuthService: AuthService) {}
  ngOnInit() {
    this.AuthService.authorized$.subscribe((isAuthorized) => {
      this.target = isAuthorized ? ['#f', '#g'] : ['#a'];
    });
  }
  async onClick(event: Event) {
    event.preventDefault();
    for (const id of this.target) {
      const targetid = document.querySelector(id);
      if (targetid) {
        targetid.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
  
}