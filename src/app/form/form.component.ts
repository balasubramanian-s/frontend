import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { organization } from '../organization/organization';
import{ApiService} from '../organization/api.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  org:organization;
  constructor(private _api:ApiService) { 
    
  }

  ngOnInit(): void {
    
  }
  editForm=new FormGroup({
    name:new FormControl,
    alias:new FormControl,
    type:new FormControl,
    createdOn:new FormControl
  });
 

  
  
  save(){ 
        this._api.body=this.editForm.value;

    console.log(this._api.body);
    
    

    this._api.addOrg(this._api.body).subscribe();
    console.log("added");  
    
  }
}
