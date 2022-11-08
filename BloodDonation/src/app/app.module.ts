import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserCarosalComponent } from './user-carosal/user-carosal.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { UserListComponent } from './user-list/user-list.component';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { UserResponseComponent } from './user-response/user-response.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    NavbarComponent,
    UserMenuComponent,
    UserCarosalComponent,
    UserNotificationComponent,
    AboutComponent,
    FooterComponent,
    UserProfileComponent,
    AdminMenuComponent,
    AdminNavComponent,
    UserListComponent,
    RequestComponent,
    ResponseComponent,
    UserResponseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
