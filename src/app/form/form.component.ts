import { Component, OnInit, Input } from '@angular/core';
import{FormGroup,FormControl} from '@angular/forms';
import { organization } from '../organization/organization';
import{ApiService} from '../organization/api.service';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
   org:organization;
   updated_org:organization;
  editForm;
  id:Number;
  
  constructor(  private _activatedroute: ActivatedRoute,
               private _router: Router,
               private _api:ApiService) { 
                console.log("constructor");
                 this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
                this._api.getOrg(this.id).subscribe(data=>{this.org=data; this.load(); });    


  }


 
  ngOnInit(): void {   
  
  this. editForm=new FormGroup({
   
    name:new FormControl(), 
    alias:new FormControl(),
    type:new FormControl(),
    createdOn:new FormControl()
  });       
 
  
  }
   load(){    
    
    this.editForm.patchValue({
      name:this.org.name,
      alias:this.org.alias,
      type:this.org.type,
      createdOn:this.org.createdon

    });   
    
  }

  save(){
    
    console.log(this.editForm.value);
    console.log("Previous Data")
    console.log(this.org);
    this.org=this.editForm.value;
    this.org.id=this.id;
    console.log("Updated Data")
    
    this._api.editOrg(this.org).subscribe(data=>console.log(data));

  }
  
 
}
