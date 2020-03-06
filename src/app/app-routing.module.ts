import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './organization/update/form.component';
import{AddComponent} from './organization/add/add.component';
import{DetailsComponent} from './organization/details/details.component';
import{OrganizationComponent} from '../app/organization/organization.component';
import{ LoginComponent} from './login/login.component'

import{StudentsComponent} from './students/students.component';

import { FacultyComponent } from './organization/faculty/faculty.component';
import { AllFacultyComponent } from './faculty/all-faculty/all-faculty.component';
import { AddFacultyComponent } from './faculty/add-faculty/add-faculty.component';
import { RolesComponent } from './faculty/roles/roles.component';
import { AddRolesComponent } from './faculty/roles/add-roles/add-roles.component';
import { EditfacultyComponent } from './faculty/editfaculty/editfaculty.component';


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
},
{
  path:"editfaculty/:id/:id1/:name",
  component:EditfacultyComponent
},
{
  path:"roles",
  component: RolesComponent,
  children:[
    {
      path:"addRoles",
      component:AddRolesComponent
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
