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
  flag=false;
  name:string;
  constructor(private fac:FacultyService,private _activatedroute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.getbyInst();
    
  }

getbyInst(){
  this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
  this.name=this._activatedroute.snapshot.paramMap.get('name');
  this.fac.getFacultyByInstitution(this.id).subscribe(data =>{this.faculty=data;this.faculty==null?this.flag=false:this.flag=true});//console.log(this.faculty) ;
  
  
}
/*get(){
  this.fac.getAllFactulty().subscribe((data:Faculty[])=>{this.faculty=data});
}*/

delete(id:Number)
{
  this.fac.deleteFaculty(id).subscribe(
    data => {
      console.log(data);
      this.getbyInst();    
    });

}}
