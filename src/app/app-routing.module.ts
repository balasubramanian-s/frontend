import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import{AddComponent} from './add/add.component';
import{DetailsComponent} from './details/details.component';
import{OrganizationComponent} from '../app/organization/organization.component';
import{ LoginComponent} from './login/login.component'
import{EmployeesComponent} from './employees/employees.component';
import{StudentsComponent} from './students/students.component';
import { from } from 'rxjs';


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
   path:"employee/:id",
   component:EmployeesComponent
 },
{
  path:"students/:id",
  component:StudentsComponent
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
