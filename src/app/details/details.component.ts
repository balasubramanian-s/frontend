import { Component, OnInit } from '@angular/core';
import{ApiService}from '../api.service';
import { organization } from '../organization/organization';
import{Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[ApiService]
})
export class DetailsComponent implements OnInit {
  org:organization;
  id:Number;
  constructor(private _api:ApiService,
              private _activatedroute: ActivatedRoute,
              private _router: Router,) {
                 this.load();   
   }
load(){
  this.id=parseInt(this._activatedroute.snapshot.paramMap.get('id'));
    this._api.getOrg(this.id).subscribe(data=>{this.org=data; });

}
  ngOnInit(): void {
    

    

  }
  

}
