import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FacultyService } from 'src/app/Services/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { Faculty } from 'src/app/model/Faculty';
import { organization } from 'src/app/model/organization';
import { ApiService } from 'src/app/Services/api.service';
import {MessageService} from 'primeng/api';



@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css'],
  providers: [FacultyService, ApiService,MessageService]
})
export class AddFacultyComponent implements OnInit {
  orgid: Number;
  orgname: String;
  roles: Roles[];
  facultyObj: Faculty;
  orgObj: organization[];
  facultyform: FormGroup;
  constructor(private _activatedroute: ActivatedRoute, private facultyService: FacultyService,
              private router: Router, private orgService: ApiService,
              private messageService:MessageService) {


    this.orgid = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.orgname = this._activatedroute.snapshot.paramMap.get('name');
    this.facultyService.getRoles().subscribe((res: any) => {if(res.status==200){
                                                            this.roles = res.body.data
                                                              } });
    this.orgService.getAllOrg().subscribe((res: any) => {if(res.status==200){
                                                        this.orgObj = res.body.data ;
                                                          }  });


  }

  ngOnInit(): void {
    this.form();

  }
  form() {
    this.facultyform = new FormGroup({

      employee_id: new FormControl(),
      institution_id: new FormControl(),
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      mobile_no: new FormControl('', Validators.required),
      role_id: new FormControl('', Validators.required),


    });
    this.facultyform.patchValue({ institution_id: this.orgid })
    

  }
  save() {

    this.facultyObj = this.facultyform.value;
    this.facultyService.addFaculty(this.facultyObj).subscribe((res:any) =>{ if(res.status==201){
                                                                            this.orgid!=null && this.orgname!=null? 
                                                                            this.router.navigate(['/faculty',this.orgid,this.orgname]): this.router.navigate(['/faculty'])}
    },err=>{
      
      if(err.status==400){
        this.messageService.clear();
        this.messageService.add({ severity:'sucess', summary: "Something Went Wrong",detail:"One or more Field is Missing" });} });

  }
  role(id: number) {
    this.facultyform.patchValue({ role_id: id })
  }
  organization(id: number) {
    this.facultyform.patchValue({ institution_id: id });
  }




}
