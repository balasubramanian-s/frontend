import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { organization } from 'src/app/model/organization';
import { Router } from '@angular/router'


import {MessageService} from 'primeng/api';
import * as _ from 'lodash';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [ApiService,MessageService]
})
export class OrganizationComponent implements OnInit {
  flag = false;
  org: organization[];
  page:number=1;
  searchText:string;
  

  constructor(private _apiService: ApiService, private router: Router,private messageService: MessageService) {
    this.reload();

  }
  reload() {
    this._apiService.getAllOrg().subscribe(res => {if(res.status=200){
                                                      this.org = res.body.data;
                                                       _.isEmpty(this.org) ? this.flag = false : this.flag = true;}
                                                      if(res.status==204){
                                                        this.messageService.clear();
                                                        this.messageService.add({ severity:'error', summary:"No Data " ,detail: 'No Organization Found'});
                                                      } },err=>console.error(err.status));
  }

  ngOnInit(): void {
    //  this.reload();


  }
  



  delete(id: Number) {

    this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
   

  }
  onConfirm(id:Number) {
    this._apiService.deleteOrg(id).subscribe(
      res => {
        this.reload();
        this.messageService.clear();
        this.messageService.add({ severity:'success', summary: res.body.description}); },
        err=>{
          
        this.messageService.clear();
        this.messageService.add({ severity:'error', summary: "Access Denied "}); 
          
        });
  }
  onReject() {
    this.messageService.clear('c');
  }
  
  clear() {
    this.messageService.clear();
  }


  changeStatus(id: Number) {

    this._apiService.statusOrg(id).subscribe(res => { this.reload();this.messageService.clear();
                                             this.messageService.add({ severity:'success', summary: 'Updated',detail: res.body.description}); },
                                             err=>{if(err.status==401){
          
                                              this.messageService.clear();
                                              this.messageService.add({ severity:'error', summary: "Access Denied "}); 
                                             }  
                                              });
  }


}
