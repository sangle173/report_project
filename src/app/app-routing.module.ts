import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Pages/users/profile/profile.component';
import { UserListComponent } from './Pages/users/user-list/user-list.component';
import { SignupComponent } from './Pages/users/signup/signup.component';
import {ShowComponent} from "./Pages/reports/show/show.component";
import {GenerateReportComponent} from "./Pages/reports/generate-report/generate-report.component";
import {IpSearchComponent} from "./Pages/ip-search/ip-search.component";
import {GenerateReportSriComponent} from "./Pages/reports/generate-report-sri/generate-report-sri.component";

const routes: Routes = [
  { path: '', component: GenerateReportComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full', title: 'Report'  }, // Default redirection to 'home'
  { path: 'signup', component: SignupComponent, title: 'Register'  },
  { path: 'profile/:id', component: ProfileComponent, title: 'Edit employee' },
  { path: 'user-list', component: UserListComponent , title: 'User List'},
  { path: 'report-show', component: ShowComponent , title: 'Report Show'},
  { path: 'generate-report', component: GenerateReportComponent , title: 'Report'},
  { path: 'generate-report-sri-team', component: GenerateReportSriComponent , title: 'Report Sri Team'},
  { path: 'ip-search', component: IpSearchComponent , title: 'IP Search'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
