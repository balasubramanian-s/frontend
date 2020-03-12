import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { StudentObj } from 'src/app/model/StudentObj';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css'],
  providers:[StudentsService]
})
export class AllStudentsComponent implements OnInit {

  students:StudentObj[];
  constructor(private _studentService:StudentsService) { }

  ngOnInit(): void {
    this.load();
  }
load(){
this._studentService.getAllStudents().subscribe(data=>{this.students=data,console.log(this.students)});
}
}
