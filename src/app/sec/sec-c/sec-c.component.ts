import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sec-c',
  templateUrl: './sec-c.component.html',
  styleUrl: './sec-c.component.css'
})

export class SecCComponent {
  constructor(public AuthService: AuthService) {}

}