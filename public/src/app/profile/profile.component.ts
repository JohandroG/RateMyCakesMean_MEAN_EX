import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { HttpService } from '../home/http.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  bdRatings: any[] = [];
  constructor(private _httpService: HttpService){
    
  }

  ngOnInit(): void {
  }

  info(bakerId:any) {
    this._httpService.fetchBakerById(bakerId)
    .subscribe( (data:any) => {
      console.log(" Baker by Id: ", data)
      this.bdRatings = data;
    })
  }

}
