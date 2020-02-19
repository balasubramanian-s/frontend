import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {organization} from './organization';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers:[ApiService]
})
export class OrganizationComponent implements OnInit {
 
 org:organization[];
 
    constructor(private _apiService:ApiService ) {
    console.log("Message Before fetch");
  _apiService.getAllOrg().subscribe(data=>{this.org=data;console.log(this.org);});   
    
    console.log("Message After fetch");
 }
  ngOnInit(): void {  
   console.log("Message from OnInit");
  }
delete(id:Number){
  this._apiService.deleteOrg(id) .subscribe(
    data => {
      console.log(data);
      
    });

}

 


}
