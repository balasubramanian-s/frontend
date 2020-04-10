import { Component, OnInit } from '@angular/core';
import{AuthenticationService} from '../../Authentication/authentication.service';
import{Router} from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthenticationService,MessageService]
})
export class LoginComponent implements OnInit {

  responsiveOptions;
  flag = false;
  loginform:FormGroup
  obj
 
  constructor(private _auth:AuthenticationService,
              private route:Router,private messageService: MessageService) {
               
               }

  ngOnInit(): void {
    sessionStorage.clear();
    this.loginform=new FormGroup({
      'username':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }
  
validate(){
this.obj=this.loginform.value;
  this._auth.getjwt(this.obj).subscribe(data=>{      this.messageService.clear();
                                                     this.messageService.add({ severity:'sucess', summary:"Login Successful " });
 
                                                        const token=data;
                                                       sessionStorage.setItem('token', JSON.stringify(token))
                                                       sessionStorage.setItem('username',JSON.stringify(this.obj.username));
                                                      this.flag=true;this.route.navigate(['home']);
                                                      },
                                                      err=>{
                                                        this.messageService.clear();
                                                     this.messageService.add({ severity:'error', summary:"Bad Credentials " });

                                                      });

  
}

 
}





