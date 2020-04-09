import { Component, OnInit } from '@angular/core';
import{ApiService} from '../../../Services/api.service';
import{Router} from '@angular/router';
import {organization} from 'src/app/model/organization';
import {MessageService} from 'primeng/api';

import{FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers:[ApiService,MessageService]
})
export class AddComponent implements OnInit {

  org:organization=new organization();
  submitted=false;
  constructor(private _apiService:ApiService,private _router:Router,private messageService:MessageService) { }

  ngOnInit(): void {
  }



  addForm=new FormGroup({
    name:new FormControl(),
    alias:new FormControl(),
    university:new FormControl(),
    
  });
  save(){   
    this.org=this.addForm.value;    
    this._apiService.addOrg(this.org).subscribe((res:any)=>{if(res.status==201){this.messageService.clear();
                                               this.messageService.add({ severity:'sucess', summary:res.body.description});
                                               this._router.navigateByUrl('home');}                                                                                            
                                              },
                                               err=>{ 
                                                if(err.status==400){
                                                  this.messageService.clear();
                                                  this.messageService.add({ severity:'sucess', summary: "Something Went Wrong",detail:"One or more Field is Missing" });  }
                                                                                              });
    
    
  }
}
