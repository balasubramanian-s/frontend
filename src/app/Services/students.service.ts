import { Injectable } from '@angular/core';
import { Student } from 'src/app/model/Student';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
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
    
    return this._httpClient.get(this.base_url,{observe : 'response'}).pipe(map((res:any)=>res.body.data),catchError(this.handleError));

  }

  getStudent(id: number): Observable<any> {
   
    return this._httpClient.get<any>(`${this.base_url}${id}`,{observe : 'response'}).pipe(map((res: any) => res), catchError(this.handleError));
  }
  getStudentByInstitution(inst_id: number): Observable<any> {
  
    return this._httpClient.get<any>(`${this.base_url}institution/${inst_id}`,{observe : 'response'}).pipe(map((res:any)=>res), catchError(this.handleError));
  }
  getStudentByInstYear(inst_id: number, year: number): Observable<any> {
    
    return this._httpClient.get<StudentObj[]>(`${this.base_url}institution/year/${inst_id}/${year}`,{observe : 'response'}).pipe(map((res:any) => res), catchError(this.handleError));
  }
  getStudentByYear(year: number): Observable<any> {
    
    return this._httpClient.get<any>(`${this.base_url}year/${year}`,{observe : 'response'}).pipe(map((res: any) =>res), catchError(this.handleError));
  }
  addStudent(obj: Student): Observable<any> {
    
    return this._httpClient.post(this.base_url, obj,{observe : 'response'}).pipe(map((res: any) =>res), catchError(this.handleError));
  }
  updateStudent(obj: Student): Observable<any> {
    
    return this._httpClient.put(this.base_url, obj,{observe : 'response'}).pipe(map((res: any) => res), catchError(this.handleError));
  }
  deleteStudent(id: number) {
    
    return this._httpClient.delete(`${this.base_url}${id}`,{observe : 'response'}).pipe(map((res:any) =>res), catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    let data={};
    
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    data={
      reason:error.error.errors,
      status:error.status
    }    
   
    return throwError(data);
  }
}
