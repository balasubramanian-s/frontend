import { Injectable } from '@angular/core';
import { StudentObj } from './model/StudentObj';
import { Student } from './model/Student';
import { FacultyObj } from './model/FacultyObj';
import { organization } from './model/organization';
import { Roles } from './model/Roles';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private organizations: organization[];
  private organization: organization;
  private roles: Roles[];
  private students: StudentObj[];
  private student: Student;
  private faculties: FacultyObj[];
  constructor() { }

  public get orgs(): organization[] {
    return this.organizations;
  }
  public set orgs(value: organization[]) {
    this.organizations = value;
  }
  public get studs(): StudentObj[] {
    return this.students;
  }
  public set studs(value: StudentObj[]) {
    this.students = value;
  }



}
