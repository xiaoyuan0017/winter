import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { ApiService } from "../api.service";
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);


@Component({

  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  showimg: boolean = false;
  profilebool = false;
  images = "";
  formShop = new FormGroup({
    "fileSource": new FormControl('', [Validators.required])
  });
  personaldata = new FormGroup({
    // username: new FormControl('', [Validators.required]),
    userphone: new FormControl('', [Validators.required])
  });
  prodata;
  element: HTMLElement;
  constructor(private apis: ApiService, private http: HttpClient, public ref: ElementRef) {

  }

  ngOnInit() {
    
    if (sessionStorage.getItem("name")) {
      this.http.post<any>(`${environment.api_url}/userinfo`, { email: sessionStorage.getItem("name") }, { headers }).subscribe(
        {
          next: data => {
            if (data.status == 200) {
              
              this.prodata = data.data;
              // console.log(this.prodata);
              if (data.data.photo) {
                // console.log(data.data.photo);
                this.showimg = true;
              }else{
                this.showimg = false;
              }
            }
          },
          error: error => {
            console.log(error);
            console.error('There was an error!', error)
          }
        }
      );
    }else{
      window.location.href = "home"
    }
    
  }
  showImg(event) {
    // this.showimg = false;
    if (event.target.files && event.target.files[0]) {
      // console.log(event.target.files);
      var filesAmount = event.target.files.length;
      // console.log(filesAmount);
      this.showimg = true;
      // console.log(event.target.files[0].size / 1024);
      if (event.target.files[0].size / 1024 < 300) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            // console.log(event.target.result);

            this.images = event.target.result;
            let image = new Image();
            image.src = this.images;
            this.formShop.patchValue({
              fileSource: this.images
            });
            this.element = document.getElementById("upload")
            this.element.setAttribute("src", event.target.result)
          }
          // reader.readAsDataURL(event.target.files[0]);
          reader.readAsDataURL(event.target.files[i]);
        }
        setTimeout(() => {
          this.apis.photos(this.formShop.value.fileSource)
        }, 3000);
      } else {
        alert("photo max size : 300KB")
      }
    }
  }

  profiledata() {
    this.profilebool = true;
    // this.ref.nativeElement.querySelector('#username1').value,
    this.apis.personaldataupdate(this.ref.nativeElement.querySelector('#userphone1').value)
  }

  permodal() {
    // console.log(this.prodata.selfname);
    // console.log(this.ref.nativeElement.querySelector('#phones').value);
    
    // this.ref.nativeElement.querySelector('#username1').value = this.prodata[0].selfname;
    console.log(this.prodata);
    if (this.prodata.phone) {
      this.ref.nativeElement.querySelector('#userphone1').value = this.prodata.phone;
    }else{
      this.ref.nativeElement.querySelector('#userphone1').value = "";
    }
    
  }
}
