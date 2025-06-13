import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './Components/all-users/all-users.component';
import { EditUserComponent } from './Components/edit-user/edit-user.component';

const routes: Routes = [
  { path:"register",component:RegisterComponent},
    { path:"login",component:LoginComponent},
        { path:"",component:HomepageComponent},
{ path: 'user-dashboard', component: UserDashboardComponent },
{ path: 'admin-dashboard', component: AdminDashboardComponent },
{ path: 'all-users', component: AllUsersComponent },
{ path: 'edit-user/:username', component: EditUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
