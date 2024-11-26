import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegComponent } from './authentication/user-reg/user-reg.component';
import { UserLogComponent } from './authentication/user-log/user-log.component';
import { IconsAComponent } from './icons/icons-a/icons-a.component';
import { IconsBComponent } from './icons/icons-b/icons-b.component';
import { IconsCComponent } from './icons/icons-c/icons-c.component';
import { IconsDComponent } from './icons/icons-d/icons-d.component';
import { IconsEComponent } from './icons/icons-e/icons-e.component';
import { SecAComponent } from './sec/sec-a/sec-a.component';
import { SecBComponent } from './sec/sec-b/sec-b.component';
import { SecCComponent } from './sec/sec-c/sec-c.component';
import { SecDComponent } from './sec/sec-d/sec-d.component';
import { SecEComponent } from './sec/sec-e/sec-e.component';
import { SecFComponent } from './sec/sec-f/sec-f.component';
import { SecGComponent } from './sec/sec-g/sec-g.component';
import { SecHComponent } from './sec/sec-h/sec-h.component';

@NgModule({
  declarations: [
    AppComponent,
    UserRegComponent,
    UserLogComponent,
    IconsAComponent,
    IconsBComponent,
    IconsCComponent,
    IconsDComponent,
    IconsEComponent,
    SecAComponent,
    SecBComponent,
    SecCComponent,
    SecDComponent,
    SecEComponent,
    SecFComponent,
    SecGComponent,
    SecHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
