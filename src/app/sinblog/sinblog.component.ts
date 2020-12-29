import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";

const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);


@Component({
  selector: 'app-sinblog',
  templateUrl: './sinblog.component.html',
  styleUrls: ['./sinblog.component.css']
})
export class SinblogComponent implements OnInit {
  bloginfos;
  blogcomment: [];
  blogcount;
  commimg;
  commentdis = false;
  commheadimg = false;
  ele: HTMLElement;
  formcomment = new FormGroup({
    comment: new FormControl(''),
  });
  constructor(private apis: ApiService, private http: HttpClient) { }

  ngOnInit() {

    // console.log(window.location.pathname.substr(11));
    let blodid = window.location.pathname.substr(11);
    this.http.get<any>(`${environment.api_url}/bloginfo/:` + blodid, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // console.log(data.data);
            // this.commheadimg = true;
            this.bloginfos = data.data;
            this.blogcomment = data.datacomment;
            this.blogcount = data.datacount;
            // console.log(this.blogcomment);
            
            // console.log(this.blogcomment);
            // console.log(data.data.comments[0].commheadimg);
            
            // this.commimg = data.img
            // if (data.data.comments.) {
              
            // }

          }
          if (data.status == 304) {
            console.log('error....');

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
  sendcomment() {
    if (sessionStorage.getItem("name")) {
      if (this.formcomment.value.comment) {
        this.ele = document.getElementById("alertcomment")
        this.ele.setAttribute("style", "display:none")
        this.commentdis = true;
        this.apis.postcomment(this.formcomment.value.comment)
      } else {
        this.commentdis = false;
        this.ele = document.getElementById("alertcomment")
        this.ele.setAttribute("style", "display:block")
      }
    } else {
      alert("please login...")
    }

  }
}
