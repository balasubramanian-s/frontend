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
  Token:String;
  constructor(private _httpClient: HttpClient) { }

  private base_url = "http://localhost:8080/student/";

  getAllStudents(): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get<any>(this.base_url,{headers:headers}).pipe(map((data: any) => data.data ), catchError(error => { console.log(error);
                                                                                            return throwError('Something Went Wrong') }));
  }

  getStudent(id: number): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get<any>(`${this.base_url}${id}`,{headers:headers}).pipe(map((data: any) => { data.data }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  getStudentByInstitution(inst_id: number): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get<any>(`${this.base_url}institution/${inst_id}`,{headers:headers}).pipe(map(res=>res.data ), catchError(error => { return throwError('Something Went Wrong') }));
  }
  getStudentByInstYear(inst_id: number, year: number): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get<StudentObj[]>(`${this.base_url}institution/year/${inst_id}/${year}`,{headers:headers}).pipe(map((res:any) => res.data), catchError(error => { return throwError('Something Went Wrong') }));
  }
  getStudentByYear(year: number): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.get<any>(`${this.base_url}year/${year}`,{headers:headers}).pipe(map((res: any) =>res.data), catchError(error => { return throwError('Something Went Wrong') }));
  }
  addStudent(obj: Student): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    
    return this._httpClient.post(this.base_url, obj,{headers:headers}).pipe(map((data: any) => { data.description}), catchError(error => { return throwError('Something Went Wrong') }));
  }
  updateStudent(obj: Student): Observable<any> {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.put(this.base_url, obj,{headers:headers}).pipe(map((data: any) => {  data.description }), catchError(error => { return throwError('Something Went Wrong') }));
  }
  deleteStudent(id: number) {
    this.Token = sessionStorage.getItem("token");
      const headers ={'Authorization':'Bearer '+this.Token,'Access-Control-Allow-Origin': '*'};
    return this._httpClient.delete(`${this.base_url}${id}`,{headers:headers}).pipe(map((data:any) => { data.description }), catchError(error => { return throwError('Something Went Wrong') }));
  }

}
