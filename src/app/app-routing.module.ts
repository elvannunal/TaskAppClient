import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/loginPage/login/login.component';
import { RegisterComponent } from './components/Auth/registerPage/register/register.component';
import { AuthGuard } from './services/authGuard-service';
import { SideBarComponent } from './components/Sidebar/side-bar/side-bar.component';
import { TeamDetailComponent } from './components/Team/team-detail/team-detail.component';
import { AllTasksComponent } from './components/Task/all-tasks/all-tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'side-bar', component: SideBarComponent , canActivate: [AuthGuard]},
  { path: 'team-detail/:id', component: TeamDetailComponent , canActivate: [AuthGuard]},
  { path: 'all-tasks', component: AllTasksComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
