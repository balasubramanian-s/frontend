import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from 'src/app/model/Faculty';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Roles } from 'src/app/model/Roles';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private base_url = "http://localhost:8081/emp";
 
  constructor(private _httpClient: HttpClient) { }
  faculty: Faculty[];
  
  roles: Roles[];
   headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  getAllFactulty() {
    return this._httpClient.get(`${this.base_url}/faculty`).pipe(map((res: any) => res));
  }

  getFaculty(id: Number) {
    return this._httpClient.get(`${this.base_url}/faculty/${id}`).pipe(map((res: any) => res));

  }
  getFacultyByInstitution(id: Number): Observable<Faculty[]> {
    return this._httpClient.get(`${this.base_url}/faculty/institution/${id}`).pipe(map((res: any) => res));

  }
  deleteFaculty(id: Number): Observable<any> {
    return this._httpClient.delete(`${this.base_url}/faculty/${id}`, { responseType: "text" });

  }
  addFaculty(fac: Faculty): Observable<Faculty> {
    console.log(fac);
    return this._httpClient.post<Faculty>(`${this.base_url}/faculty`, fac);
  }
  editFaculty(fac: Faculty): Observable<Faculty> {
    return this._httpClient.put<Faculty>(`${this.base_url}/faculty`, fac).pipe();
  }



  //htpp calls for Roles Api
  getRoles(): Observable<Roles> {
    return this._httpClient.get<Roles[]>(`${this.base_url}/role`).pipe(map((res: any) => this.roles=res));

  }
  getRolesByid(id:number){
    return this._httpClient.get<Roles>(`${this.base_url}/role/${id}`).pipe(map((res:any)=>res));
  }
  addRole(role:Roles){
    return this._httpClient.post<Roles>(`${this.base_url}/role`,role).pipe(map((res:any)=>res));
  }
  deleteRole(id:Number){
    return this._httpClient.delete(`${this.base_url}/role`).pipe(map((res=>console.log(res))));
  }

}
