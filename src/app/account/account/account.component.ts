import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() showAccount: boolean = false;
  email: string = '';
  password1: string = '';
  password2: string = '';
  password3: string = '';
  showCredential1: boolean = false;
  showCredential2: boolean = false;

  closeAccount() {
    this.showAccount = false;
  }

  toggle1(): void {
    this.showCredential1 = !this.showCredential1;
  }

  toggle2(): void {
    this.showCredential2 = !this.showCredential2;
  }

  imageSrc: string | ArrayBuffer | null = null;

  upload(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input?.files?.[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.imageSrc = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  






  showDeactivation: boolean = false;
  openDeactivation() {
    this.showDeactivation = true;
  }
  closeDeactivation() {
    this.showDeactivation = false;
  }

}