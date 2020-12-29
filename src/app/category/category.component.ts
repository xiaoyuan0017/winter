import { Component, OnInit, ElementRef } from '@angular/core';
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);



@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  allshopdata: [];
  alllength;
  constructor(private apis: ApiService, private http: HttpClient) { }
  ngOnInit() {
    this.http.get<any>(`${environment.api_url}/shoplist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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

  addcarts(event) {
    // console.log(event.target.lastChild.innerText);
    let subcartid = event.target.lastChild.innerText
    // console.log(subcartid);

    if (subcartid == "") {

    } else {
      alert("already add shop card...")
      // console.log(subcartid);
      this.apis.addshopcard(subcartid)
    }

    // console.log(event.target.childNodes[0]);
  }
  alldata() {
    window.location.reload();
  }
  clothesdata() {
    this.http.get<any>(`${environment.api_url}/clotheslist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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
  shoesdata() {
    this.http.get<any>(`${environment.api_url}/shoeslist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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
  computerdata() {
    this.http.get<any>(`${environment.api_url}/computerlist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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
  phonedata() {
    this.http.get<any>(`${environment.api_url}/phonelist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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
  snackdata() {
    this.http.get<any>(`${environment.api_url}/snacklist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            this.allshopdata = data.data;
            this.alllength = "ALL (" + data.shoplength + ")";
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
}
