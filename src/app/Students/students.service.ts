import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { StudentObj } from '../model/StudentObj';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  s: StudentObj[];
  s1: Student;
  constructor(private _httpClient: HttpClient) { }

  private base_url = "http://localhost:8083/student";

  getAllStudents(): Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/getall`).pipe(map((data: StudentObj[]) => {this.s=data; return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }

  getStudent(id: number): Observable<StudentObj> {
    return this._httpClient.get<StudentObj>(`${this.base_url}/get/${id}`).pipe(map((data: StudentObj) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  getStudentByInstitution(inst_id: number): Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/institution/${inst_id}`).pipe(map((data: StudentObj[]) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  getStudentByYear(inst_id: number, year: number): Observable<StudentObj[]> {
    return this._httpClient.get<StudentObj[]>(`${this.base_url}/year/${inst_id}/${year}`).pipe(map((data: StudentObj[]) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  addStudent(obj: Student): Observable<Student> {
    console.log(obj);
    return this._httpClient.post<Student>(`${this.base_url}/addStudent`, obj).pipe(map((data: Student) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  updateStudent(obj: Student): Observable<Student> {
    return this._httpClient.put<Student>(`${this.base_url}/addStudent`, obj).pipe(map((data: Student) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  deleteStudent(id: number) {
    return this._httpClient.delete(`${this.base_url}/delete/${id}`).pipe(map((data: StudentObj[]) => { return data; }), catchError(error => { return throwError('Something Went Wrong') }));
  }

}
