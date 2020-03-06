import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { Roles } from 'src/app/model/Roles';

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

  ngOnInit(): void {
    this.facultyService.getRoles().subscribe((data:any)=>{this.role=data,this.role==null?this.flag=false:this.flag=true});

  }

  delete(id:number){

  }
 add(){
   
 }
}
