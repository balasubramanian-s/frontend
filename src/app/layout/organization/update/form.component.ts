import { Component, OnInit, Input } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { organization } from 'src/app/model/organization';
import{ApiService} from '../../../Services/api.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ApiService,MessageService]
})
export class FormComponent implements OnInit {
   org:organization;
   updated_org:organization;
  editForm;
  id:Number;
  
  constructor(  private _activatedroute: ActivatedRoute,
               private _router: Router,
               private _api:ApiService,private messageService:MessageService
               ) { 
                
                  this.getdetails();


  }
  getdetails(){
                 this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
                this._api.getOrg(this.id).subscribe(res=>{ if(res.status==200){
                                                            this.org=res.body.data;this.load();
                                                         }},
                                                         err=>{
                                                           if(err.status==404){
                                                            this.messageService.clear();
                                                            this.messageService.add({ severity:'error', summary: "Something Went Wrong" });
                                                           }
                                                         });   

  }


 
  ngOnInit(): void {   
  
  this. editForm=new FormGroup({
   
    name:new FormControl(), 
    alias:new FormControl(),
    university:new FormControl(),
    createdon:new FormControl,
    modifiedon :new FormControl,
    isActive:new FormControl(1)
  
  });       
 
  
  }
   load(){    
    
    this.editForm.patchValue({
      name:this.org.name,
      alias:this.org.alias,
      university:this.org.university,
      createdon:this.org.createdon,
     isActive:this.org.isActive

    });   
    
  }
  update(){
    
    this.org=this.editForm.value;
    this.org.id=this.id;        
    this._api.editOrg(this.org).subscribe((res:any)=>{if(res.status==200){
                                                             this.messageService.clear();
                                                              this.messageService.add({ severity:'sucess', summary:"Data Updated"});
                                                              this._router.navigateByUrl('home');       
                                                          }

                                                    },
                                                    err=>{
                                                      if(err.status==400){
                                                        this.messageService.clear();
                                                        this.messageService.add({ severity:'error', summary:"Something Went Wrong",detail:"One or more Field is Missing"});

                                                      }else if(err.status==404){
                                                        this.messageService.clear();
                                                        this.messageService.add({ severity:'error', summary:"Something Went Wrong"});

                                                      }else{
                                                        this.messageService.clear();
                                                        this.messageService.add({ severity:'error', summary:"Something Went Wrong"});

                                                      }

                                                    });
   


  }
  
 
}
