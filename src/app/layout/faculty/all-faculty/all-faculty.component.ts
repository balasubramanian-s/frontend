import { Component, OnInit } from '@angular/core';
import{FacultyService} from 'src/app/Services/faculty.service';
import{MessageService} from 'primeng/api';
import { ActivatedRoute } from '@angular/router';
import { FacultyObj } from 'src/app/model/FacultyObj';

@Component({
  selector: 'app-all-faculty',
  templateUrl: './all-faculty.component.html',
  styleUrls: ['./all-faculty.component.css'],
  providers:[FacultyService,MessageService]
})
export class AllFacultyComponent implements OnInit {
  faculty:FacultyObj[];
  flag=false;
  name:string[];
  ask;
  constructor(private _facultyService:FacultyService,private _activatedroute:ActivatedRoute ,private messageService:MessageService) { }

  ngOnInit(): void {
    
    this.load();
  }
  load(){
    this._facultyService.getAllFactulty().subscribe((res:any)=>{if(res.status==200){this.faculty=res.body.data,this.flag=true}
                                                                  if(res.status==204){this.messageService.add({ severity:'error', summary:"No Data "});}},
   err=>{ this.messageService.clear();
    this.messageService.add({ severity:'error', summary: err.status,detail:"Something Went Wrong"});} );
  }
  delete(id:Number)
  {
    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   
   
}
onConfirm(id:Number) {
  this._facultyService.deleteFaculty(id).subscribe(
    res => {if(res.status==200){

    
      this.load();
      this.messageService.clear();
      this.messageService.add({ severity:'success', summary: res.body.description});} },
      err=>{
        this.messageService.clear();
      this.messageService.add({ severity:'error', summary: err.status,detail:"Something Went Wrong"});
      });
}
onReject() {
  this.messageService.clear('c');
}

clear() {
  this.messageService.clear();
}
}