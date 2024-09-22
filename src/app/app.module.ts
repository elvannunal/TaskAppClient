import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { LoginComponent } from './components/Auth/loginPage/login/login.component';
import { RegisterComponent } from './components/Auth/registerPage/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './components/Auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/HomePage/home-page/home-page.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SideBarComponent } from './components/HomePage/side-bar/side-bar.component';
import { TeamComponent } from "./components/Team/team.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule, DxTextBoxModule, DxTreeListModule } from 'devextreme-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddTeamModalComponent } from './components/HomePage/side-bar/add-team-modal/add-team-modal.component';
import { EditTeamModalComponent } from './components/HomePage/side-bar/edit-team-modal/edit-team-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent,
    AddTeamModalComponent,
    EditTeamModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatFormFieldModule,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
