import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Subscription } from 'rxjs';
import { UserLogComponent } from '../../authentication/user-log/user-log.component';

@Component({
  selector: 'app-icons-b',
  templateUrl: './icons-b.component.html',
  styleUrls: ['./icons-b.component.css']
})

export class IconsBComponent implements OnInit, OnDestroy {
  @ViewChild(UserLogComponent) UserLogComponent!: UserLogComponent;
  openAccount: boolean = false;
  private subscription: Subscription = new Subscription();
  constructor(private AuthService: AuthService) {}
  ngOnInit() {
    this.subscription = this.AuthService.authorized$.subscribe(isAuthorized => {
      if (!isAuthorized) {
        this.openAccount = false;
      }
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  openLogin() {
    if (this.AuthService.isAuthorized()) {
      this.openAccount = !this.openAccount;
    } else {
      this.UserLogComponent.openLogin();
    }
  }
  logout() {
    this.AuthService.logout();
    this.openAccount = false;
  }
  
}