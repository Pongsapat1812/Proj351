import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.css']
})

export class DeactivateComponent {
  email: string = '';

  @Output() close = new EventEmitter<void>();
  @Output() confirm = new EventEmitter<string>();
  cancel() {
    this.close.emit();
  }
  deactivate() {
    if (this.email) {
      this.confirm.emit(this.email);
      this.logout();
      this.close.emit();
    }
  }
  logout() {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
    window.location.href = '/login';
  }

}