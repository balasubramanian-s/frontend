import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import{ActivatedRoute,Router} from '@angular/router'
import { StudentObj } from 'src/app/model/StudentObj';

@Component({
  selector: 'app-org-students',
  templateUrl: './org-students.component.html',
  styleUrls: ['./org-students.component.css'],
  providers:[StudentsService]
})
export class OrgStudentsComponent implements OnInit {
inst_id;
inst_name;
students:StudentObj[];
ask;
  constructor(private _studentsService:StudentsService,private _activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.inst_id=this._activatedRoute.snapshot.paramMap.get('id');
    this.inst_name=this._activatedRoute.snapshot.paramMap.get('name');
    this.load();
  }
  load(){
    this._studentsService.getStudentByInstitution(this.inst_id).subscribe(data=>{this.students=data});
  }
delete(id:number){
  this.ask=confirm("Are You Sure?");
  if(this.ask){
    this._studentsService.deleteStudent(id).subscribe(data=>{this.load(),console.log(data)});

  }

}
}
