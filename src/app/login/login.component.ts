import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../authentication.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  invalidLogin = false
  constructor(private _auth:AuthenticationService,
              private route:Router) { }

  ngOnInit(): void {
  }
check(){
  if(this._auth.authenticate(this.username,this.password)){
    this.route.navigate(['home']);

  }
  else{
    alert("Invalid Credetials")

  }
}
 
}





