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
  message:string;
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
 

  update(){
     
    console.log(this.editForm.value);
  }
  
 
}
