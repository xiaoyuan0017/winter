import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { ApiService } from "../api.service";



@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  testemail = /^([a-zA-Z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/;
  form = new FormGroup({
    updatepassword: new FormControl(''),
  });
  passtatus = false;
  ment: HTMLElement;
  ment1: HTMLElement;
  constructor(private api: ApiService) { }
  ngOnInit() {
  }
  updatepass() {
    if (this.form.value.updatepassword) {
      if (!this.testemail.test(this.form.value.updatepassword)) {
        this.ment = document.getElementById("alemail")
        this.ment.setAttribute("style", "display:none")
        this.ment = document.getElementById("aldont")
        this.ment.setAttribute("style", "display:none")
        this.ment = document.getElementById("alforgot")
        this.ment.setAttribute("style", "display:block")

      } else {
        this.passtatus = true;
        this.api.passwordupdate(this.form.value.updatepassword)
      }
    } else {
      this.ment = document.getElementById("alforgot")
      this.ment.setAttribute("style", "display:none")
      this.ment = document.getElementById("aldont")
      this.ment.setAttribute("style", "display:none")
      this.ment = document.getElementById("alemail")
      this.ment.setAttribute("style", "display:block")
    }
  }
}
