import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './team.component';
import { TeamListComponent } from './team-list/team-list.component';

const routes: Routes = [
  {
    path: 'team',
    component: TeamComponent,
    children: [
      { path: 'list', component: TeamListComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }, // Default child route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamRoutingModule { }
