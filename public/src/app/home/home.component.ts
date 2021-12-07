import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bdBakers: any[] = [];
  bdRatings: any = {};
  ratingsCount: any = {};
  countOfRatings: any = 0;
  sum: any;

  newCake : any = {
    bakerFN : "",
    bakerLN : "",
    image : ""
  }

  newRating : any = {
    rating : Number,
    comment : ""
  }

  constructor(private _httpService: HttpService){
    this.getAllBakers();
  }

  ngOnInit(): void {
    
  }

  getAllBakers(): void {
    console.log("We are going to fetch the bakers list!");
    this._httpService.fetchBakers()
    .subscribe( (data:any) => {
      this.bdBakers = data.baker;
      console.log( "All Bakers: ", this.bdBakers );
    });
  }

  cakeSubmit(){
    let observable = this._httpService.fetchAddBakers(this.newCake);
    observable.subscribe( (data:any) => {
      console.log("Create Cake: ", data);
    })
    location.reload();
  }

  ratingSubmit(id:any){
    console.log("Id", Object(id));
    console.log("New rating", this.newRating);
    this.newRating.id = id
    let observable = this._httpService.fetchAddRate(this.newRating);
    observable.subscribe(data => {
      console.log("Create Comment: ", data);
    })
    location.reload();
  }

  info(bakerId:any) {
    this._httpService.fetchBakerById(bakerId)
    .subscribe( (data:any) => {
      console.log(" Baker by Id: ", data)
      for(let i = 0; i < data.ratings.length; i++){
        this.ratingsCount = data.ratings[i].rating
        this.countOfRatings = this.countOfRatings + this.ratingsCount;
        this.sum  = this.countOfRatings / data.ratings.length;
      }
      console.log("Rating Count: ", this.sum)
      this.bdRatings = data;
    })
    //location.reload();
  }

  close() {
    location.reload();
  }

}
