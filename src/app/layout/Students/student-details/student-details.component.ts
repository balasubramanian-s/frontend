import { Component, OnInit, Input, ViewChild } from '@angular/core';
import{ActivatedRoute,Router}from '@angular/router';
import { StudentObj } from 'src/app/model/StudentObj';
import { OrgStudentsComponent } from '../org-students/org-students.component';
import { StudentsService } from '../../../Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers:[StudentsService]
})
export class StudentDetailsComponent implements OnInit {
  student:StudentObj;
  student_id:number
  constructor(private _activatedRoute:ActivatedRoute,private _router:Router,private _studentsService:StudentsService) { }
@ViewChild(OrgStudentsComponent)
orgStudents:OrgStudentsComponent
  ngOnInit(): void {
   this.student_id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
   this._studentsService.getStudent(this.student_id).subscribe((data:StudentObj)=>{this.student=data});
    
   console.log(this.student);
  }
  ngAfterViewInit(){
    //console.log(this.orgStudents.students);
  }


}
