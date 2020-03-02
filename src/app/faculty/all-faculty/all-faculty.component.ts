import { Component, OnInit } from '@angular/core';
import{FacultyService} from 'src/app/organization/faculty/faculty.service';
import { Faculty } from 'src/app/organization/faculty/Faculty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css'],
  providers:[FacultyService]
})
export class AllFacultyComponent implements OnInit {
  faculty:Faculty[];
  flag=false;
  name:string[];
  
  constructor(private _facultyService:FacultyService,private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this._facultyService.getAllFactulty().subscribe((data:Faculty[])=>{this.faculty=data,this.flag=true});
  }

}
