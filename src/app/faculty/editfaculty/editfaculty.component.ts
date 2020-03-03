import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { Faculty } from 'src/app/organization/faculty/Faculty';
import { Roles } from '../Roles';

@Component({
  selector: 'app-editfaculty',
  templateUrl: './editfaculty.component.html',
  styleUrls: ['./editfaculty.component.css'],
  providers:[FacultyService]
})
export class EditfacultyComponent implements OnInit {
  flag=false;
id:number;
faculty:Faculty;
roles: Roles[];
  constructor(private activatedRoute:ActivatedRoute,private facultyService:FacultyService,private router:Router) { }

  ngOnInit(): void {
    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.facultyService.getFaculty(this.id).subscribe(data=>{this.faculty=data,this.faculty==null?this.flag=false:this.flag=true,this.load()});
    this.facultyService.getRoles().subscribe((data: any) => { this.roles = data });
  }
editform=new FormGroup({
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
  this.facultyService.editFaculty(this.faculty).subscribe(data=>this.router.navigateByUrl('/home'))
}
role(id: number) {
  this.editform.patchValue({ role_id: id })
}
load(){
  this.editform.patchValue({
    employee_id:this.faculty.employee_id,
    institution_id:this.faculty.institution_id,
    first_name:this.faculty.first_name,
    last_name:this.faculty.last_name,
    dob:this.faculty.dob,
    email:this.faculty.email,
    mobile_no:this.faculty.mobile_no,
    role_id:this.faculty.role_id



  })
}
}
