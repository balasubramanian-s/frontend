import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl} from '@angular/forms';
import { findIndex } from 'rxjs/operators';



@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
id:Number;
name:String;
Roles={1:'Head Of Department',2:'Professor',3:'Assisstant Professor',4:'Lab Assisstant',5:'Placement Officer'};
_role:String;
  constructor(private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.name=this._activatedroute.snapshot.paramMap.get('name');
  }

   facultyform=new FormGroup({
    employee_id:new FormControl(),
    institution_id:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    dob:new FormControl(),
    email:new FormControl(),
    mobile_no:new FormControl(),
    role_id:new FormControl(),


  });
  save(){
    this.facultyform.patchValue({employee_id: 1010,
    institution_id: this.id ,
    
    })
   console.log(this.facultyform.value);
    
  }
  role(role){
   this._role=role;
   

  }
  
  
  

}
