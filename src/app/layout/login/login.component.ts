import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../../Authentication/authentication.service';
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
  flag = false;
  
  constructor(private _auth:AuthenticationService,
              private route:Router) { }

  ngOnInit(): void {
    sessionStorage.clear();
  }
validate(){
//this._auth.login(this.username,this.password);
  this._auth.getjwt(this.username,this.password).subscribe(data=>                                                       
                                                      {
                                                        const token=data;
                                                       sessionStorage.setItem('token', JSON.stringify(token));
                                                      this.flag=true;this.route.navigate(['home']);alert('Login Successful');
                                                      });

  if(this.flag){ 
    
    alert("Invalid Password")
      

  }
 
}

 
}





