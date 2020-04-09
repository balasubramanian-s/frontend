import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/Services/faculty.service';
import { Faculty } from 'src/app/model/Faculty';
import { Roles } from 'src/app/model/Roles';
import { FacultyObj } from 'src/app/model/FacultyObj';
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-editfaculty',
  templateUrl: './editfaculty.component.html',
  styleUrls: ['./editfaculty.component.css'],
  providers:[FacultyService,ApiService,MessageService]
})
export class EditfacultyComponent implements OnInit {
  flag=false;
id:number;
org_id:number;
org_name:String;
Obj:FacultyObj;
faculty:Faculty;
roles: Roles[];
orgObj:organization[];
error;
  constructor(private activatedRoute:ActivatedRoute,private facultyService:FacultyService,
              private orgService:ApiService,private router:Router,
              private messageService:MessageService) { }

  ngOnInit(): void {
    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.org_id=parseInt(this.activatedRoute.snapshot.paramMap.get('id1'));
    this.org_name=this.activatedRoute.snapshot.paramMap.get('name');

    this.facultyService.getFaculty(this.id).subscribe(res=>{if(res.status==200){
                                                             this.Obj=res.body.data,this.Obj==null?this.flag=false:this.flag=true,this.load();
                                                             }},err=>{
                                                               if(err.status==404){
                                                              this.messageService.clear();
                                                              this.messageService.add({ severity:'error', summary: "Something Went Wrong" });} });
    this.facultyService.getRoles().subscribe((res: any) => { if(res.status==200){this.roles = res.body.data} },
                                                  err=>{
                                                    if(err.status==404){
                                                   this.messageService.clear();
                                                   this.messageService.add({ severity:'error', summary: "Something Went Wrong" });} });
    this.orgService.getAllOrg().subscribe((res:any)=>{if(res.status==200){this.orgObj=res.body.data}},
                                                        err=>{
                                                          if(err.status==404){
                                                        this.messageService.clear();
                                                        this.messageService.add({ severity:'error', summary: "Something Went Wrong" });}}
                                                        );
   

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
  
}) ;



update(){
 
  this.faculty=this.editform.value;  
  this.facultyService.editFaculty(this.faculty).subscribe((res:any)=>{if(res.status==200){this.router.navigate(['/faculty',this.org_id,this.org_name]);}},
                                                                       err => {
                                                                        if(err.status==204) 
                                                                          {this.messageService.clear();
                                                                            this.messageService.add({ severity:'error', summary: "Something Went Wrong" });
                                                                        }
                                                                        
                                                                        if(err.status==400)
                                                                         {this.messageService.clear();
                                                                          this.messageService.add({ severity:'error', summary: "Something Went Wrong" });
                                                                        }}
                                                                        );

  

}
role(id: number) {
  this.editform.patchValue({ role_id: id })
}
organization(id:number){
  this.editform.patchValue({institution_id:id});
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
    
  });
  
}
}
