import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../../Services/students.service';
import { StudentObj } from 'src/app/model/StudentObj';
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';
import{MessageService} from 'primeng/api';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers:[StudentsService,MessageService]
})
export class AllStudentsComponent implements OnInit {
flag=false;
ask;
years:SelectItem[];
  students;
  selectedyear;
  constructor(private _studentService:StudentsService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.years=[]   
    this.years.push({label:'All',value:'0'})
    this.years.push({label:'First Year',value:'1'});
    this.years.push({label:'Second Year',value:'2'});
    this.years.push({label:'Third Year',value:'3'});
    this.years.push({label:'Fourth Year',value:'4'});
    this.load();
  }
load(){
this._studentService.getAllStudents().subscribe(res=>{this.students=res,_.isEmpty(this.students)?this.flag=false:this.flag=true},
                                                err=>{
                                                  this.messageService.clear();
                                                  this.messageService.add({ severity:'error', summary: err.status,detail:"Something Went Wrong"});
                                                } );
}
reload(){
  this._studentService.getStudentByYear(this.selectedyear).subscribe(res=>{this.students=res.body.data,_.isEmpty(this.students)?this.flag=false:this.flag=true},
                                                                      err=>{
                                                                      this.messageService.clear();
                                                                      this.messageService.add({ severity:'error', summary: err.status,detail:"Something Went Wrong"});} );
}
delete(id: number) {
  this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   

 
}
onConfirm(id:number) {
  this._studentService.deleteStudent(id).subscribe(
    res => {if(res.status==200){    
      this.load();
      this.messageService.clear();
      this.messageService.add({ severity:'success', summary: res.body.description});} },
      err=>{
        this.messageService.clear();
      this.messageService.add({ severity:'error', summary: err.status,detail:"Something Went Wrong"});
      });
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
