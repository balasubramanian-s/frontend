import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import{AddComponent} from './add/add.component';
import{DetailsComponent} from './details/details.component';
import{OrganizationComponent} from '../app/organization/organization.component';
import{ LoginComponent} from './login/login.component'



const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:"home",
    component:OrganizationComponent,
    children:[{ path:"add",component:AddComponent},{path:"edit/:id",component:FormComponent}]
  },
  {
    path:"details/:id",
    component:DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
