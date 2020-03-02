import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './organization/form/form.component';
import{AddComponent} from './organization/add/add.component';
import{DetailsComponent} from './organization/details/details.component';
import{OrganizationComponent} from '../app/organization/organization.component';
import{ LoginComponent} from './login/login.component'

import{StudentsComponent} from './students/students.component';

import { FacultyComponent } from './organization/faculty/faculty.component';
import { AllFacultyComponent } from './faculty/all-faculty/all-faculty.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:"home",
    component:OrganizationComponent,
    
  },
  {
    path:"edit/:id",
    component:FormComponent
  },
 
  {
    path:"add",
 component:AddComponent
 },
  {
    path:"details/:id",
    component:DetailsComponent
  },

 {
   path:"faculty/:id/:name",
   component:FacultyComponent
 },
{
  path:"students/:id",
  component:StudentsComponent
},
{
  path:"faculty",
  component:AllFacultyComponent
},
{
  path:"addFaculties/:id/:name",
  component:AddFacultyComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
