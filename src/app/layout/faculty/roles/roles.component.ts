import { Component, OnInit } from '@angular/core';
import { FacultyService } from 'src/app/Services/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { FormGroup, FormControl } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
  providers:[FacultyService,MessageService]
})
export class RolesComponent implements OnInit {
  role:Roles[];
  flag=false;
  constructor(private facultyService:FacultyService,private messageService: MessageService) { }
name:String;
role1:Roles
i;
  ngOnInit(): void {
    
this.load();
  }

  load(){
    this.facultyService.getRoles().subscribe((res:any)=>{if(res.status==200){this.role=res.body.data,this.role==null?this.flag=false:this.flag=true}},
                                              err=>{ this.messageService.clear();
                                                this.messageService.add({ severity:'error', summary:"Something went Wrong " });});
    
   
  }
  addrole=new FormGroup({
    name:new FormControl
  });

  
 add(){   
 this.role1=this.addrole.value;
console.log(this.role1);
  this.facultyService.addRole(this.role1).subscribe((res:any)=>{if(res.status==201){
                                                                this.load(); this.messageService.clear();
                                                               this.messageService.add({ severity:'success', summary:"Role added " });
                                                                    }},err=>{if(err.status==400){
                                                                      this.messageService.clear();
                                                                      this.messageService.add({ severity:'error', summary:"Role cannot be Empty "});}
                                                                    });
 }
}
