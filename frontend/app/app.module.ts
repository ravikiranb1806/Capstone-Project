import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }   from './app.component';
import { HomeComponent }  from './home/home';
import { HomenavbarComponent }  from './home/homenavbar';
import { LoginComponent } from './login/login';
import { SignupComponent } from './signup/signup';
import { UserhomeComponent } from './userhome/userhome';
import { AUserhomeComponent } from './Accommodator/auserhome';
import { RequestsComponent } from './userhome/requests';
import { SettingsComponent } from './userhome/settings';
import { BlockedComponent } from './userhome/blocked';
import { NavbarComponent } from './userhome/navbar';
import { AccommodatorsComponent } from './userhome/accommodators';
import { StudentsComponent } from './Accommodator/students';
import { ARequestsComponent } from './Accommodator/arequests';
import { ASettingsComponent } from './Accommodator/asettings';
import { ABlockedComponent } from './Accommodator/ablocked';
import { UsersService } from './services/users.service';
import { AdminComponent } from './admin/admin';





const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'userhome', component: UserhomeComponent },
  { path: 'auserhome', component: AUserhomeComponent },
  { path: 'requests', component: RequestsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'blocked', component: BlockedComponent },
  { path: 'arequests', component: ARequestsComponent },
  { path: 'asettings', component: ASettingsComponent },
  { path: 'ablocked', component: ABlockedComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [ 
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    AUserhomeComponent,
    RequestsComponent,
    SettingsComponent,
    BlockedComponent,
    ARequestsComponent,
    ASettingsComponent,
    ABlockedComponent,
    NavbarComponent,
    AccommodatorsComponent,
    StudentsComponent,
    HomenavbarComponent,
    AdminComponent
  ],
  providers: [
    UsersService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}