import { Component, OnInit, Input, ViewChild } from '@angular/core';
import{ActivatedRoute,Router}from '@angular/router';
import { StudentObj } from 'src/app/model/StudentObj';
import { OrgStudentsComponent } from '../org-students/org-students.component';
import { StudentsService } from '../../../Services/students.service';
import {MessageService} from 'primeng/api';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  providers:[StudentsService,MessageService]
})
export class StudentDetailsComponent implements OnInit {
  student:StudentObj;
  student_id:number
  constructor(private _activatedRoute:ActivatedRoute,private _router:Router,private _studentsService:StudentsService,private messageService:MessageService) { }
@ViewChild(OrgStudentsComponent)
orgStudents:OrgStudentsComponent
  ngOnInit(): void {
   this.student_id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
   this._studentsService.getStudent(this.student_id).subscribe((res:any)=>{if(res.status==200){this.student=res.body.data}},
                                                                err=>{
                                                                  this.messageService.clear();
                                                                  this.messageService.add({ severity:'sucess', summary: err.status,detail:"No Data" });  
                                                                    
                                                                });
    
   
  }
  ngAfterViewInit(){
    //console.log(this.orgStudents.students);
  }


}
