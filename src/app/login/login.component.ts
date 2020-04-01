import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../authentication.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService]
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = 'pass';
  invalidLogin = false;
  token=sessionStorage.getItem('token');
  constructor(private _auth:AuthenticationService,
              private route:Router) { }

  ngOnInit(): void {
  }
validate(){
//this._auth.login(this.username,this.password);
  //this._auth.getjwt(this.username,this.password).subscribe(data=>{this.token=data;console.log(data)});

  if(this._auth.authenticate(this.username,this.password)){
    alert('Login Successful');
    this.route.navigate(['home']);
    
    this.invalidLogin = false;

  }else{
    this.invalidLogin=true;
    alert("Invalid Password")


  }
 /* if(this._auth.authenticate(this.username,this.password)){
    this.route.navigate(['home']);
    this.invalidLogin = false;

  }
  else{
    this.invalidLogin=true;
    alert("Invalid Password")

  }*/
}

 
}





