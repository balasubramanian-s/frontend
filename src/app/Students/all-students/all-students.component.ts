import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentObj } from 'src/app/model/StudentObj';
import * as _ from 'lodash';
import { SelectItem } from 'primeng/api/selectitem';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers:[StudentsService]
})
export class AllStudentsComponent implements OnInit {
flag=false;
ask;
years:SelectItem[];
  students:StudentObj[];
  selectedyear;
  constructor(private _studentService:StudentsService) { }

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
this._studentService.getAllStudents().subscribe(data=>{this.students=data,_.isEmpty(this.students)?this.flag=false:this.flag=true});
}
reload(){
  this._studentService.getStudentByYear(this.selectedyear).subscribe(data=>{this.students=data,_.isEmpty(this.students)?this.flag=false:this.flag=true});
}
delete(id: number) {
  this.ask = confirm("Are You Sure?");
  if (this.ask) {
    this._studentService.deleteStudent(id).subscribe(data => { this.load(), console.log(data) });

  }

 
}
year(id:number){
  this.selectedyear=id;
  this.selectedyear==0?this.load():this.reload();
  }
}
