import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sec-d',
  templateUrl: './sec-d.component.html',
  styleUrl: './sec-d.component.css'
})

export class SecDComponent {
  constructor(public AuthService: AuthService) {}

}