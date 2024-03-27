import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './Pages/users/user-list/user-list.component';
import { ProfileComponent } from './Pages/users/profile/profile.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Pages/partials/navbar/navbar.component';
import { LoadingComponent } from './Pages/partials/loading/loading.component';
import { SignupComponent } from './Pages/users/signup/signup.component';
import { FooterComponent } from './Pages/partials/footer/footer.component';
import { UserService } from './Services/user.service';
import {ShowComponent} from "./Pages/reports/show/show.component";
import {GenerateReportComponent} from "./Pages/reports/generate-report/generate-report.component";

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    LoadingComponent,
    SignupComponent,
    FooterComponent,
    ShowComponent,
    GenerateReportComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
