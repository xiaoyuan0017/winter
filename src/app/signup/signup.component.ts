import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { Observable } from 'rxjs';
import { ApiService } from "../api.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: any;
  subdis = false;
  result: string;
  testemail = /^([a-zA-Z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
  codestatus = false;
  codetime = 60;
  sendcodes = "send code";
  form = new FormGroup({
    useremail: new FormControl(''),
    username: new FormControl(''),
    userpass: new FormControl(''),
    usercode: new FormControl(''),
  });
  element: HTMLElement;
  element1: HTMLElement;
  element2: HTMLElement;
  element3: HTMLElement;
  sendcodis: HTMLElement;

  // element: HTMLElement = document.getElementById("alertsignup")
  // element1: HTMLElement = document.getElementById("alertaccount")
  // element2: HTMLElement = document.getElementById("alertemail")
  // element3: HTMLElement = document.getElementById("alertmailbox")
  constructor(private Apiservices: ApiService) { }

  ngOnInit() {
  }
  sendcode() {
    if (!this.testemail.test(this.form.value.useremail)) {
      this.element1 = document.getElementById("alertaccount")
      this.element1.setAttribute("style", "display:none")
      this.element2 = document.getElementById("alertmailbox")
      this.element2.setAttribute("style", "display:block")
    } else {
      this.element2 = document.getElementById("alertmailbox")
      this.element2.setAttribute("style", "display:none")
      let a = Math.floor(Math.random() * (9 - 0)) + 0;
      let b = Math.floor(Math.random() * (9 - 0)) + 0;
      let c = Math.floor(Math.random() * (9 - 0)) + 0;
      let e = Math.floor(Math.random() * (9 - 0)) + 0;
      let f = Math.floor(Math.random() * (9 - 0)) + 0;
      let g = Math.floor(Math.random() * (9 - 0)) + 0;
      this.result = String(a)
      this.result += String(b)
      this.result += String(c)
      this.result += String(e)
      this.result += String(f)
      this.result += String(g)
      // console.log(this.result);
      sessionStorage.setItem("usercode", this.result)
      this.codestatus = true;
      const start = setInterval(()=>{
        if (this.codetime>0) {
          this.sendcodes = `${this.codetime--}`;
        } else {
          clearInterval(start)
          this.sendcodes = "send code";
          this.codestatus = false;
          this.codetime = 60;
        }
      },1000)
      this.Apiservices.usercode(this.form.value.useremail,this.result)
    }
  }
  signupAccount() {
    if (this.form.value.useremail &&this.form.value.username && this.form.value.userpass && this.form.value.usercode) {
      if (!this.testemail.test(this.form.value.useremail)) {
        this.element2 = document.getElementById("alertmailbox")
        this.element1 = document.getElementById("alertaccount")
        this.element2.setAttribute("style", "display:block")
        this.element1.setAttribute("style", "display:none")
      } else {
        // this.user =
        this.subdis = true;
        this.Apiservices.adduser(this.form.value.useremail, this.form.value.username,this.form.value.userpass, this.form.value.usercode)
      }
    } else {
      this.element1 = document.getElementById("alertaccount")
      this.element1.setAttribute("style", "display:block")
    }
    // console.log(this.form.value.useremail);
    // console.log(this.form.value.userpass);
    // console.log(this.form.value.usercode);
    // this.user = this.Apiservices.adduser(this.form.value.useremail,this.form.value.userpass)
  }
}
