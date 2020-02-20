import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import{AddComponent} from './add/add.component';
import{DetailsComponent} from './details/details.component';
import { from } from 'rxjs';



const routes: Routes = [
  {
    path:"add",
    component:AddComponent
  },
{
  path:"edit",
  component:FormComponent
},
{
  path:"details",
  component:DetailsComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
