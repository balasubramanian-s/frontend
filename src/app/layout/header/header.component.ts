import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../Authentication/authentication.service';
import{Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sidebar;
  name;
  email;
 

  constructor(public _auth:AuthenticationService,private _location:Location) { }

  ngOnInit(): void {
    if(this._auth.isUserLoggedIn()){
      this.getName();
    }
  }
check(){
 return  this._auth.isUserLoggedIn()
}
getName(){
  this.email=sessionStorage.getItem('username');
  this.email=JSON.parse(this.email);
  this.name   = this.email.substring(0, this.email.lastIndexOf("@"));
 
}

back(){
  this._location.back();
}
}
