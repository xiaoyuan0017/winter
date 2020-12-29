import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  shopdata;
  shopdata1;
  shopdata2;
  shopdata3;
  shopdata4;
  shopdata5;
  constructor(private api: ApiService, private http: HttpClient) { }

  ngOnInit() {
    // this.api.shoplist();
    this.http.get<any>(`${environment.api_url}/shoplist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            // console.log(data.data.length);
            this.shopdata = data.data[0];
            this.shopdata1 = data.data[1];
            this.shopdata2= data.data[2];
            this.shopdata3 = data.data[3];
            this.shopdata4 = data.data[4];
            this.shopdata5 = data.data[5];
            // this.shopdata = data.data;
            // console.log(this.shopdata);

          }
        }
        ,
        error: error => {
          console.log(error);
          console.error('There was an error!', error)
        }
      }
    );
  }
  bag(event) {
    if (sessionStorage.getItem("name")) {
      // console.log(event);
      // console.log(event.target);
      // console.log(event.target.parentNode.firstChild.innerText);
      let cartid = event.target.parentNode.firstChild.innerText;

      if (cartid == "") {

      } else {
        console.log(cartid);
        alert("already add shop card...")
        this.api.addshopcard(cartid)
      }

    } else {
      alert("please login...")
    }
  }
}
