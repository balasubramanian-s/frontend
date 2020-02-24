import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { FormComponent } from './form/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import{ApiService} from '../app/api.service'
import { DetailsComponent } from './details/details.component';
import { AddComponent } from './add/add.component' ;
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    FormComponent,
    
    DetailsComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
