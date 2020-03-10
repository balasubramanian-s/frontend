import { Component, OnInit } from '@angular/core';
import{FacultyService} from 'src/app/organization/faculty/faculty.service';

import { ActivatedRoute } from '@angular/router';
import { FacultyObj } from 'src/app/model/FacultyObj';

@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css'],
  providers:[FacultyService]
})
export class AllFacultyComponent implements OnInit {
  faculty:FacultyObj[];
  flag=false;
  name:string[];
  ask;
  constructor(private _facultyService:FacultyService,private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.load();
  }
  load(){
    this._facultyService.getAllFactulty().subscribe((data:FacultyObj[])=>{this.faculty=data,this.flag=true});
  }
  delete(id:Number)
  {
    this.ask=confirm("Press OK to Delete");
    if(this.ask){
      this._facultyService.deleteFaculty(id).subscribe(data => this.load());

    }
   
}
}