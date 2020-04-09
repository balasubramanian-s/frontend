import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../../Services/faculty.service';
import { ActivatedRoute } from '@angular/router';
import { Roles } from 'src/app/model/Roles';
import {MessageService} from 'primeng/api';

import * as _ from 'lodash';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers:[FacultyService,MessageService]
})
export class FacultyComponent implements OnInit {
 
  faculty:Object[]; 
  id:Number;
  flag=false;
  name:string;
  role:Roles;
  
  constructor(private fac:FacultyService,private _activatedroute:ActivatedRoute,private messageService:MessageService) { 
    
  }

  ngOnInit(): void {
    this.getbyInst();    
  }

getbyInst(){
  this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
  this.name=this._activatedroute.snapshot.paramMap.get('name');
  this.fac.getFacultyByInstitution(this.id).subscribe((res:any) =>{if(res.status==200){this.faculty=res.body.data;}
                                                                    if (res.status==204){ 
                                                                       this.messageService.clear();
                                                                       this.messageService.add({ severity:'error', summary:"No Data " ,detail: 'No Faculty was Found'});}
                                                                    _.isEmpty(this.faculty)?this.flag=false:this.flag=true});
  
  
}
getRole(id:number){
  this.fac.getRolesByid(id).subscribe(res=>this.role=res.body.data);

}

delete(id:Number)
{
  this.messageService.clear();
  this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}
onConfirm(id:Number) {
  
  this.messageService.clear('c');
  this.fac.deleteFaculty(id).subscribe(res => { this.getbyInst(); 
    this.messageService.clear();
    this.messageService.add({ severity:'success', summary: res.body.description});});
  
}
onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
}
