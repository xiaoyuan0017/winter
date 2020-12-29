import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../api.service";


@Component({
  selector: 'app-sublog',
  templateUrl: './sublog.component.html',
  styleUrls: ['./sublog.component.css']
})
export class SublogComponent implements OnInit {
  formBlog = new FormGroup({
    blogname: new FormControl('', [Validators.required]),
    blogsubject: new FormControl('', [Validators.required]),
    blogfile: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    bloginfo: new FormControl('', [Validators.required]),
  });
  blogdis = false;
  showimg: boolean = false;
  images = "";
  constructor(private apis: ApiService) { }

  ngOnInit() {
    if (sessionStorage.getItem("name")) {

    }else{
      window.location.href = "home"
    }
  }
  showImg(event) {
    console.log(event.target.files);
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      this.showimg = true;
      if (event.target.files[0].size / 1024 < 1000) {
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.images = event.target.result;
            let image = new Image();
            image.src = this.images;
            this.formBlog.patchValue({
              fileSource: this.images
            });
          }
          reader.readAsDataURL(event.target.files[i]);
        }
      }else{
        alert("photo max size : 1000KB")
      }
    }


  }
  postBlog() {
    if (this.formBlog.value.blogname && this.formBlog.value.blogsubject && this.formBlog.value.bloginfo) {
      this.blogdis = true;
      this.apis.sendblog(this.formBlog.value.blogname, this.formBlog.value.blogsubject, this.formBlog.value.fileSource, this.formBlog.value.bloginfo)
    } else {
      this.blogdis = false;
      alert("please entry all info...")
    }
  }

}
