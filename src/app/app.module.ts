import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import{HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './layout/organization/organization.component';
import { FormComponent } from './layout/organization/update/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ApiService} from './Services/api.service';
import { DetailsComponent } from './layout/organization/details/details.component';
import { AddComponent } from './layout/organization/add/add.component' ;
import{FormsModule} from '@angular/forms';
import { LoginComponent } from './layout/login/login.component';
import { YesNoPipe } from './Pipes/yes-no.pipe';
import { StatusPipe } from './Pipes/status.pipe';
import{OAuthModule} from 'angular-oauth2-oidc';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { FacultyComponent } from './layout/organization/faculty/faculty.component';
import { FacultyService } from './Services/faculty.service';
import { AllFacultyComponent } from './layout/faculty/all-faculty/all-faculty.component';

import { AddFacultyComponent } from './layout/faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './layout/faculty/roles/roles.component';
import { EditfacultyComponent } from './layout/faculty/editfaculty/editfaculty.component';
import {httpInterceptorProviders} from './Authentication/index';
//PrimeNg Modules
import {TabViewModule} from 'primeng/tabview';
import {TabMenuModule} from 'primeng/tabmenu';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { AllStudentsComponent } from './layout/Students/all-students/all-students.component';
import { OrgStudentsComponent } from './layout/Students/org-students/org-students.component';
import { AddStudentsComponent } from './layout/Students/add-students/add-students.component';
import { EditStudentsComponent } from './layout/Students/edit-students/edit-students.component';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import { StudentDetailsComponent } from './layout/Students/student-details/student-details.component';
import { LogoutComponent } from './layout/logout/logout.component';
import { HeaderComponent } from './layout/header/header.component';




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
       
    FacultyComponent,   
    AllFacultyComponent,   
    AddFacultyComponent, RolesComponent, EditfacultyComponent, AllStudentsComponent, OrgStudentsComponent, AddStudentsComponent, EditStudentsComponent, StudentDetailsComponent, LogoutComponent, HeaderComponent,  
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
    ToastModule,PanelModule,MessagesModule,MessageModule,DropdownModule,CalendarModule,
    
    RouterModule.forRoot([])
  ],
  providers: [httpInterceptorProviders,ApiService,FacultyService],//{provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true},
  bootstrap: [AppComponent]
})
export class AppModule { }
