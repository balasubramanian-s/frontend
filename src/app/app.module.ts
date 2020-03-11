import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { FormComponent } from './organization/update/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ApiService} from './organization/api.service';
import { DetailsComponent } from './organization/details/details.component';
import { AddComponent } from './organization/add/add.component' ;
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { YesNoPipe } from './yes-no.pipe';
import { StatusPipe } from './status.pipe';
import{OAuthModule} from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { FacultyComponent } from './organization/faculty/faculty.component';
import { FacultyService } from './organization/faculty/faculty.service';
import { AllFacultyComponent } from './faculty/all-faculty/all-faculty.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './faculty/roles/roles.component';
import { EditfacultyComponent } from './faculty/editfaculty/editfaculty.component';

//PrimeNg Modules
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    FormComponent,   
    DetailsComponent,
    AddComponent,
    LoginComponent,
    YesNoPipe,
    StatusPipe,   
    StudentsComponent,   
    FacultyComponent,   
    AllFacultyComponent,   
    SidebarComponent, AddFacultyComponent, RolesComponent, EditfacultyComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    NgbAlertModule,
    CommonModule,
    TabViewModule,
    TabMenuModule,
    SidebarModule,
    ButtonModule,
    TableModule,
    RouterModule.forRoot([])
  ],
  providers: [ApiService,FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
