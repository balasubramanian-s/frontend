import { Injectable } from '@angular/core';
import{Student} from 'src/app/model/Student';
import{HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { StudentObj } from '../model/StudentObj';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _httpClient:HttpClient) { }

  private base_url = "http://localhost:8083/student";

  getAllStudents():Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getall`).pipe(map(res=>res));
  }

  getStudent(id: number):Observable<StudentObj> {
    return  this._httpClient.get<StudentObj>(`${this.base_url}/get/${id}`).pipe(map(res=>res));
  }
  getStudentByInstitution(inst_id: number):Observable<StudentObj[]> {
    return  this._httpClient.get<StudentObj[]>(`${this.base_url}/institution/${inst_id}`).pipe(map(res=>res));
  }
  getStudentByYear(inst_id: number, year: number):Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/year/${inst_id}/${year}`).pipe(map(res=>res));
  }
  addStudent(obj:Student):Observable<Student> {
    console.log(obj);
    return this._httpClient.post<Student>(`${this.base_url}/addStudent`,obj).pipe(map(res=>res));
  }
  updateStudent(obj:Student):Observable<Student> {
    return  this._httpClient.put<Student>(`${this.base_url}/addStudent`,obj).pipe(map(res=>res));
  }
  deleteStudent(id: number) {
    return this._httpClient.delete(`${this.base_url}/delete/${id}`).pipe(map(res=>res));
  }

}
