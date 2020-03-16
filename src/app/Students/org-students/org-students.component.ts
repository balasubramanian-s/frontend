import { Component, OnInit, Output } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router'
import { StudentObj } from 'src/app/model/StudentObj';
import { EventEmitter } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-org-students',
  templateUrl: './org-students.component.html',
  styleUrls: ['./org-students.component.css'],
  providers: [StudentsService,DataService]
})
export class OrgStudentsComponent implements OnInit {
  inst_id;
  inst_name;
  students: StudentObj[];
  ask;
  constructor(private _studentsService: StudentsService, private _activatedRoute: ActivatedRoute, private router: Router,private _dataService:DataService) {
    

   }


  ngOnInit(): void {
    this.inst_id = this._activatedRoute.snapshot.paramMap.get('id');
    this.inst_name = this._activatedRoute.snapshot.paramMap.get('name');
    this.load();
  }

  load() {
    var s=new DataService();
    this._studentsService.getStudentByInstitution(this.inst_id).subscribe(data => { this.students = data;});
    s.studs=this.students;
    console.log(s.studs);
  }
  delete(id: number) {
    this.ask = confirm("Are You Sure?");
    if (this.ask) {
      this._studentsService.deleteStudent(id).subscribe(data => { this.load(), console.log(data) });

    }

   
  }
  
}
