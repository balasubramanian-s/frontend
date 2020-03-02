import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from './Faculty';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  private faculty_url="http://localhost:8081/emp/faculty";
  private url2="http://localhost:8081/emp/faculty/institution";

  constructor(private _httpClient:HttpClient) { }
faculty:Faculty[];

getAllFactulty():Observable<Faculty[]>{
return this._httpClient.get<Faculty[]>(this.faculty_url).pipe(map((res:any)=>res));
}

getFaculty(id:Number){
  return this._httpClient.get<Faculty>(`${this.faculty_url}/${id}`).pipe(map((res:any)=>res));

}
getFacultyByInstitution(id:Number):Observable<Faculty[]>{
  return this._httpClient.get<Faculty[]>(`${this.url2}/${id}`).pipe(map((res:any)=>res));

}
deleteFaculty(id:Number):Observable<any>
{
  return this._httpClient.delete(`${this.faculty_url}/${id}`,{responseType:"text"});

}
addFaculty(fac:Faculty):Observable<Faculty>{
  return this._httpClient.post<Faculty>(this.faculty_url,fac).pipe();
}
editFaculty(fac:Faculty):Observable<Faculty>{
  return this._httpClient.put<Faculty>(this.faculty_url,fac).pipe();
}



}
