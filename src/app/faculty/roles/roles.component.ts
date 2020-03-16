import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[FacultyService]
})
export class RolesComponent implements OnInit {
  role:Roles[];
  flag=false;
  constructor(private facultyService:FacultyService) { }
name:String;
role1:Roles
i;
  ngOnInit(): void {
    
this.load();
  }

  load(){
    this.facultyService.getRoles().subscribe((data:any)=>{this.role=data,this.role==null?this.flag=false:this.flag=true});
    
    console.log();
  }
  addrole=new FormGroup({
    name:new FormControl
  });

  
 add(){   
 this.role1=this.addrole.value;
console.log(this.role1);
  this.facultyService.addRole(this.role1).subscribe((data:any)=>{this.load()});
 }
}
