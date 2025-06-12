import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { UserDashboardComponent } from './Components/user-dashboard/user-dashboard.component';

const routes: Routes = [
  { path:"register",component:RegisterComponent},
    { path:"login",component:LoginComponent},
        { path:"",component:HomepageComponent},
{ path: 'user-dashboard', component: UserDashboardComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
