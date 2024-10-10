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
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SideBarComponent } from './components/Sidebar/side-bar/side-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule, DxTextBoxModule, DxTreeListModule } from 'devextreme-angular';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddTeamModalComponent } from './components/Sidebar/side-bar/add-team-modal/add-team-modal.component';
import { EditTeamModalComponent } from './components/Sidebar/side-bar/edit-team-modal/edit-team-modal.component';
import { TeamDetailComponent } from './components/Team/team-detail/team-detail.component';
import { AllTasksComponent } from './components/Task/all-tasks/all-tasks.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AddTaskModalComponent } from './components/Task/add-task-modal/add-task-modal.component';
import { UpdateDeleteTaskModalComponent } from './components/Task/update-delete-task-modal/update-delete-task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    AddTeamModalComponent,
    EditTeamModalComponent,
    TeamDetailComponent,
    AllTasksComponent,
    HomepageComponent,
    AddTaskModalComponent,
    UpdateDeleteTaskModalComponent,
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
