import { Component, OnInit, Input } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { organization } from '../organization/organization';
import{ApiService} from '../api.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import{OrganizationComponent} from '../organization/organization.component'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers:[ApiService]
})
export class FormComponent implements OnInit {
   org:organization;
   updated_org:organization;
  editForm;
  id:Number;
  
  constructor(  private _activatedroute: ActivatedRoute,
               private _router: Router,
               private _api:ApiService,
               private _orgComponent:OrganizationComponent) { 
                
                 this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
                this._api.getOrg(this.id).subscribe(data=>{this.org=data;this.load(); });    


  }


 
  ngOnInit(): void {   
  
  this. editForm=new FormGroup({
   
    name:new FormControl(), 
    alias:new FormControl(),
    type:new FormControl(),
    createdon:new FormControl,
    modifiedon :new FormControl,
    isUserVerification:new FormControl(0),
    isSignup:new FormControl(0),
    isActive:new FormControl(1)
  
  });       
 
  
  }
   load(){    
    
    this.editForm.patchValue({
      name:this.org.name,
      alias:this.org.alias,
      type:this.org.type,
      isUserVerification:this.org.isUserVerification,
      isSignup:this.org.isSignup,
     createdon:this.org.createdon,
     isActive:this.org.isActive

    });   
    
  }
  update(){
    
    console.log(this.editForm.value);
    console.log("Previous Data")
    console.log(this.org);
    this.org=this.editForm.value;
    this.org.id=this.id;    
    console.log("Updated Data")    
    this._api.editOrg(this.org).subscribe(data=>{console.log(data);this._orgComponent.reload();});
    


  }
  
 
}
