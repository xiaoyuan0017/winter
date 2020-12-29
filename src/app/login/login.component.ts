import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { ApiService } from "../api.service";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any;
  elems:HTMLElement;
  elems1:HTMLElement;
  logindis = false;
  form = new FormGroup({
    loginname: new FormControl(''),
    loginpass: new FormControl(''),
  });
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  }

  login() {
    if (this.form.value.loginname&&this.form.value.loginpass) {
      console.log('run');
      
      
      this.user = this.apiservice.login(this.form.value.loginname, this.form.value.loginpass)
    } else {
      console.log('null...');
      
      this.logindis = false;
      this.elems1 = document.getElementById("alerterror")
      this.elems1.setAttribute("style", "display:none")
      this.elems = document.getElementById("alertlogin")
      this.elems.setAttribute("style", "display:block")
    }
  }

}
