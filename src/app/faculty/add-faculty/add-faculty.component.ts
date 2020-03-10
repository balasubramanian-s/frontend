import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FacultyService } from 'src/app/organization/faculty/faculty.service';
import { Roles } from 'src/app/model/Roles';
import { Faculty } from 'src/app/model/Faculty';



@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css'],
  providers: [FacultyService]
})
export class AddFacultyComponent implements OnInit {
  id: Number;
  name: String;
  roles: Roles[];
  facultyObj: Faculty;
  constructor(private _activatedroute: ActivatedRoute, private facultyService: FacultyService, private router: Router) { }

  ngOnInit(): void {
    this.id = parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this.name = this._activatedroute.snapshot.paramMap.get('name');
    this.facultyService.getRoles().subscribe((data: any) => { this.roles = data });

  }

  facultyform = new FormGroup({
    employee_id: new FormControl(),
    institution_id: new FormControl(),
    first_name: new FormControl('',Validators.required),
    last_name: new FormControl('',Validators.required),
    dob: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    mobile_no: new FormControl('',Validators.required),
    role_id: new FormControl('',Validators.required),


  });
  save() {
    this.facultyform.patchValue({ institution_id: this.id });
    this.facultyObj = this.facultyform.value;
    this.facultyService.addFaculty(this.facultyObj).subscribe(data =>this.router.navigate(['/faculty', this.id, this.name]))

  }
  role(id: number) {
    this.facultyform.patchValue({ role_id: id })
  }





}
