import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/Auth/loginPage/login/login.component';
import { RegisterComponent } from './components/Auth/registerPage/register/register.component';
import { AuthGuard } from './services/authGuard-service';
import { HomePageComponent } from './components/HomePage/home-page/home-page.component';
import { SideBarComponent } from './components/HomePage/side-bar/side-bar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'side-bar', component: SideBarComponent , canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
