import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { StudentsService } from '../../../Services/students.service';
import{Student} from 'src/app/model/Student'
import { SelectItem } from 'primeng/api/selectitem';
import{ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css'],
  providers:[StudentsService]
})
export class AddStudentsComponent implements OnInit {
  inst_id:number;
  inst_name:String;
studentForm:FormGroup;
submitted: boolean;
stud:Student;
years:SelectItem[]
  constructor(private fb: FormBuilder,private studentService:StudentsService,private _activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.inst_id=parseInt(this._activatedRoute.snapshot.paramMap.get('id'));
    this.inst_name=this._activatedRoute.snapshot.paramMap.get('name');
    this.studentForm = this.fb.group({
     
      'institutionid':new FormControl('',Validators.required),
      'redgno':new FormControl('',Validators.required),
      'fname': new FormControl('', Validators.required),
      'lname': new FormControl('', Validators.required),
      'dob': new FormControl('',Validators.required),
      'email': new FormControl('',Validators.required),
      'mobileno': new FormControl('', Validators.required),
      'year':new FormControl('',Validators.required)
  });
  this.years=[];
  this.years.push({label:'Select Year',value:''});
  this.years.push({label:'First Year',value:'1'});
  this.years.push({label:'Second Year',value:'2'});
  this.years.push({label:'Third Year',value:'3'});
  this.years.push({label:'Fourth Year',value:'4'});
  }
  onSubmit() {
    this.submitted = true;
    this.studentForm.patchValue({institutionid:this.inst_id});
    this.stud=this.studentForm.value;    
    this.studentService.addStudent(this.stud).subscribe(data=>{this.router.navigate(['/students',this.inst_id,this.inst_name])});

  }
  
}
