import { Component, OnInit } from '@angular/core';
import{ApiService} from '../api.service';
import{Router} from '@angular/router';
import {organization} from '../organization/organization';
import{OrganizationComponent} from '../organization/organization.component'
import{FormGroup,FormControl} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[ApiService]
})
export class AddComponent implements OnInit {

  org:organization=new organization();
  submitted=false;
  constructor(private _apiService:ApiService,private _router:Router,private _orgComponent:OrganizationComponent) { }

  ngOnInit(): void {
  }
  addForm=new FormGroup({
    name:new FormControl,
    alias:new FormControl,
    type:new FormControl,
    
  });
  save(){
    this.org=this.addForm.value;
    //console.log(this.org);
    this._apiService.addOrg(this.org).subscribe(data=>console.log(data));
    this._orgComponent.reload();
    
  }
}
