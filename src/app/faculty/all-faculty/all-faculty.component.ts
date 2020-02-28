import { Component, OnInit } from '@angular/core';
import{FacultyService} from 'src/app/organization/faculty/faculty.service';
import { Faculty } from 'src/app/organization/faculty/Faculty';
@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css']
})
export class AllFacultyComponent implements OnInit {
  faculty:Faculty[];
  constructor(private _facultyService:FacultyService) { }

  ngOnInit(): void {
    this._facultyService.getAllFactulty().subscribe((data:Faculty[])=>{this.faculty=data,console.log(data)});
  }

}
