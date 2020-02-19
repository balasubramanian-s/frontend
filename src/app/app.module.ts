import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { FormComponent } from './form/form.component';
import{ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component';
import { DetailsComponent } from './details/details.component' ;


@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    FormComponent,
    UpdateComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
