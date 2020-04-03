import { Component, OnInit, Output } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { organization } from 'src/app/model/organization';
import { Router } from '@angular/router'

import {Message} from 'primeng/api';
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
  msgs:Message[]=[];

  constructor(private _apiService: ApiService, private router: Router,private messageService: MessageService) {
    this.reload();

  }
  reload() {
    this._apiService.getAllOrg().subscribe(res => { this.org = res.data; _.isEmpty(this.org) ? this.flag = false : this.flag = true });
  }

  ngOnInit(): void {
    //  this.reload();


  }
  ngAfterViewInit() {

  }



  delete(id: Number) {
    this._apiService.deleteOrg(id).subscribe(
      data => {
        this.reload();
        this.messageService.clear();
        this.messageService.add({ severity:'success', summary: data});
        
       
      });

  }


  changeStatus(id: Number) {

    this._apiService.statusOrg(id).subscribe(data => { this.reload();this.messageService.clear();
      this.messageService.add({ severity:'success', summary: data}); });
  }


}
