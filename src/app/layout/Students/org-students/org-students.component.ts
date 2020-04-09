import { Component, OnInit, Output } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import { ActivatedRoute, Router } from '@angular/router'
import { StudentObj } from 'src/app/model/StudentObj';
import { EventEmitter } from '@angular/core';
import {MessageService} from 'primeng/api'
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResourceLoader } from '@angular/compiler';
@Component({
  selector: 'app-org-students',
  templateUrl: './org-students.component.html',
  styleUrls: ['./org-students.component.css'],
  providers: [StudentsService,MessageService]
})
export class OrgStudentsComponent implements OnInit {
  inst_id;
  inst_name;
  students: StudentObj[];
  ask;
  flag=false;
  yearForm:FormGroup;
  years:SelectItem[];
  selectedyear;
  constructor(private fb: FormBuilder,private _studentsService: StudentsService,
             private _activatedRoute: ActivatedRoute, private router: Router,
             private messageService:MessageService) {
    

   }


  ngOnInit(): void {
    this.inst_id = this._activatedRoute.snapshot.paramMap.get('id');
    this.inst_name = this._activatedRoute.snapshot.paramMap.get('name');    
   
    this.years=[]   
    this.years.push({label:'All',value:'0'})
    this.years.push({label:'First Year',value:'1'});
    this.years.push({label:'Second Year',value:'2'});
    this.years.push({label:'Third Year',value:'3'});
    this.years.push({label:'Fourth Year',value:'4'});
    this.load();
  }

  load() {    
      this._studentsService.getStudentByInstitution(this.inst_id).subscribe(res => {if(res.status==200){ this.students = res.body.data;_.isEmpty(this.students)?this.flag=false:this.flag=true}
                                                                                  },err=>{if(err.status==404){this.messageService.clear();
                                                                                    this.messageService.add({ severity:'error', summary:"No Students " });}});
     
  }
  reload(){
    this._studentsService.getStudentByInstYear(this.inst_id,this.selectedyear).subscribe(res=>{if(res.status==200){this.students=res.body.data;_.isEmpty(this.students)?this.flag=false:this.flag=true}},
                                                                                          err=>{if(err.status==404){this.flag=false; this.messageService.clear();
                                                                                            this.messageService.add({ severity:'error', summary:"No Students " });}});
  }
  delete(id: number) {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   
   
  }
  onConfirm(id:number) {
    this._studentsService.deleteStudent(id).subscribe(
      res => {
        this.reload();
        this.messageService.clear();
        this.messageService.add({ severity:'success', summary: res.body.description}); },
        err=>console.error(err.status));
  }
  onReject() {
    this.messageService.clear('c');
  }
  
  clear() {
    this.messageService.clear();
  }

  year(id:number){
  this.selectedyear=id;
  this.selectedyear==0?this.load():this.reload();
  }
  
}
