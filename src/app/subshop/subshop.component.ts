import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators } from "@angular/forms";
import { ApiService } from "../api.service";


@Component({
  selector: 'app-subshop',
  templateUrl: './subshop.component.html',
  styleUrls: ['./subshop.component.css']
})


export class SubshopComponent implements OnInit {
  showimg: boolean = false;
  showimg1: boolean = false;
  showimg2: boolean = false;
  selectedFile: FileList;
  images = "";
  images1 = "";
  images2 = "";
  formShop = new FormGroup({
    "shopname": new FormControl('', [Validators.required]),
    "shopfile": new FormControl('', [Validators.required]),
    "shopfile1": new FormControl('', [Validators.required]),
    "shopfile2": new FormControl('', [Validators.required]),
    "shopkind": new FormControl('', [Validators.required]),
    "nums": new FormControl('', [Validators.required]),
    "price": new FormControl('', [Validators.required]),
    "shopinfo": new FormControl('', [Validators.required]),
    "fileSource": new FormControl('', [Validators.required]),
    "fileSource1": new FormControl('', [Validators.required]),
    "fileSource2": new FormControl('', [Validators.required]),
  });

  shopdis = false;
  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  constructor(private apis: ApiService) { }

  ngOnInit() {
    if (sessionStorage.getItem("name")) {

    }else{
      window.location.href = "home"
    }
  }

  showImg(event) {
    if (event.target.files[0].size / 1024 < 700) {
      if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        this.showimg = true;
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.images = event.target.result;
            let image = new Image();
            image.src = this.images;
            this.formShop.patchValue({
              fileSource: this.images
            });
          }

          reader.readAsDataURL(event.target.files[i]);
        }
      }
    } else {
      alert("photo max size : 700KB")
    }
  }
  showImg1(event) {
    if (event.target.files[0].size / 1024 < 700) {
      if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        console.log(filesAmount);
        
        this.showimg1 = true;
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.images1 = event.target.result;
            let image = new Image();
            image.src = this.images1;
            this.formShop.patchValue({
              fileSource1: this.images1
            });
          }

          reader.readAsDataURL(event.target.files[i]);
        }
      }
    } else {
      alert("photo max size : 700KB")
    }
  }
  showImg2(event) {
    if (event.target.files[0].size / 1024 < 700) {
      if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        this.showimg2 = true;
        for (let i = 0; i < filesAmount; i++) {
          var reader = new FileReader();
          reader.onload = (event: any) => {
            this.images2 = event.target.result;
            let image = new Image();
            image.src = this.images2;
            this.formShop.patchValue({
              fileSource2: this.images2
            });
          }

          reader.readAsDataURL(event.target.files[i]);
        }
      }
    } else {
      alert("photo max size : 700KB")
    }
  }
  postShop() {
    // console.log(this.formShop.value);
    if (this.formShop.value.shopname == "" && this.formShop.value.shopfile == ""&& this.formShop.value.shopfile1 == ""&& this.formShop.value.shopfile2 == "" && this.formShop.value.shopkind == "" && this.formShop.value.nums == "" && this.formShop.value.price == "" && this.formShop.value.shopinfo == "") {
      this.shopdis = false;
    } else {
      this.shopdis = true;
      this.apis.subshop(this.formShop.value.shopname, this.formShop.value.shopkind, this.formShop.value.nums, this.formShop.value.price, this.formShop.value.shopinfo, this.formShop.value.fileSource,this.formShop.value.fileSource1,this.formShop.value.fileSource2)
    }
  }
}
