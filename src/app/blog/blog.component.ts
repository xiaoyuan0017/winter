import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  api_blog = environment.api_blog;
  blogdata:[];
  constructor(private apis: ApiService,private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>(`${environment.api_url}/userblog`, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            this.blogdata = data.data;
            // console.log(this.blogdata);
            
            // console.log(new Date(data.data[0].date).getMonth());
            // console.log(data.data);
            // console.log(data.data[0].date.toLocaleString());
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
