import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { AccountComponent } from './account/account/account.component';
import { DeactivateComponent } from './account/deactivate/deactivate/deactivate.component';
import { NoteComponent } from './usersnote/note/note.component';
import { RatComponent } from './music/rat/rat.component';
import { HeowComponent } from './music/heow/heow.component';
import { TaawanComponent } from './music/taawan/taawan.component';
import { OreoComponent } from './music/oreo/oreo.component';
import { SettingComponent } from './music/setting/setting.component';
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
    SecHComponent,
    AccountComponent,
    DeactivateComponent,
    NoteComponent,
    RatComponent,
    HeowComponent,
    TaawanComponent,
    OreoComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }