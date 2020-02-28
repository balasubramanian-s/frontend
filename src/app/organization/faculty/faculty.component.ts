import { Component, OnInit } from '@angular/core';
import { FacultyService } from './faculty.service';
import { Faculty } from './Faculty';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css'],
  providers:[FacultyService]
})
export class FacultyComponent implements OnInit {
  faculty:Faculty[]; 
  id:Number;
  constructor(private fac:FacultyService,private _activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    
    
  }
getbyInst(){
  this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
  this.fac.getFacultyByInstitution(this.id).subscribe((data:Faculty[])=>{this.faculty=data});
  
  
}
get(){
  this.fac.getAllFactulty().subscribe((data:Faculty[])=>{this.faculty=data});
}
}
