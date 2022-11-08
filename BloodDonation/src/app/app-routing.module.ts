import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { ExpenseGuard } from './expense.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequestComponent } from './request/request.component';
import { ResponseComponent } from './response/response.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { UserNotificationComponent } from './user-notification/user-notification.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserResponseComponent } from './user-response/user-response.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "user", component: UserDashboardComponent,canActivate: [ExpenseGuard],
    children: [
      { path: "", component: UserMenuComponent ,canActivate: [ExpenseGuard]},
      { path: "profile", component: UserProfileComponent,canActivate: [ExpenseGuard] },
      { path: "notify", component: UserNotificationComponent,canActivate: [ExpenseGuard] },
      { path: "userResponse", component: UserResponseComponent,canActivate: [ExpenseGuard] },
    ]
  },
  // {path:"user/profile",component:UserProfileComponent},
  {
    path: "admin", component: AdminDashboardComponent,canActivate: [ExpenseGuard],
    children: [
      { path: "", component: AdminMenuComponent,canActivate: [ExpenseGuard] },
      { path: "profile", component: UserProfileComponent,canActivate: [ExpenseGuard] },
      { path: "list", component: UserListComponent,canActivate: [ExpenseGuard] },
      { path: "request", component: RequestComponent ,canActivate: [ExpenseGuard]},
      { path: "response", component: ResponseComponent ,canActivate: [ExpenseGuard]},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
