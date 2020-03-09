import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { Faculty } from 'src/app/model/Faculty';
import { Roles } from 'src/app/model/Roles';
import { FacultyObj } from 'src/app/model/FacultyObj';

@Component({
  selector: 'app-editfaculty',
  templateUrl: './editfaculty.component.html',
  styleUrls: ['./editfaculty.component.css'],
  providers:[FacultyService]
})
export class EditfacultyComponent implements OnInit {
  flag=false;
id:number;
org_id:number;
org_name:String;
Obj:FacultyObj;
faculty:Faculty;
roles: Roles[];
  constructor(private activatedRoute:ActivatedRoute,private facultyService:FacultyService,private router:Router) { }

  ngOnInit(): void {
    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.org_id=parseInt(this.activatedRoute.snapshot.paramMap.get('id1'));
    this.org_name=this.activatedRoute.snapshot.paramMap.get('name');
    this.facultyService.getFaculty(this.id).subscribe(data=>{this.Obj=data,this.Obj==null?this.flag=false:this.flag=true,this.load();});
    this.facultyService.getRoles().subscribe((data: any) => { this.roles = data });
  }
editform=new FormGroup({
  id:new FormControl(),
  employee_id: new FormControl(),
  institution_id: new FormControl(),
  first_name: new FormControl(),
  last_name: new FormControl(),
  dob: new FormControl(),
  email: new FormControl(),
  mobile_no: new FormControl(),
  role_id: new FormControl(),
  
}) 
update(){
  console.log(this.editform.value);
  this.faculty=this.editform.value;
  this.facultyService.editFaculty(this.faculty).subscribe(data=>this.router.navigate(['/faculty', this.org_id, this.org_name]));
}
role(id: number) {
  this.editform.patchValue({ role_id: id })
}
load(){
  this.editform.patchValue({
    id:this.Obj.id,
    employee_id:this.Obj.employee_id,
    institution_id:this.Obj.org.id,
    first_name:this.Obj.first_name,
    last_name:this.Obj.last_name,
    dob:this.Obj.dob,
    email:this.Obj.email,
    mobile_no:this.Obj.mobile_no,
    role_id:this.Obj.roles.id,
    
  })
}
}
