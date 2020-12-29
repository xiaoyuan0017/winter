import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl } from "@angular/forms";
import { ApiService } from "../api.service";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  sendis=false;
  contact = new FormGroup({
    name: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  ele:HTMLElement;
  constructor(private apis: ApiService) { }

  ngOnInit() {
  }
  contactsend(){
    if (this.contact.value.name&&this.contact.value.subject&&this.contact.value.email&&this.contact.value.message) {
      this.sendis=true;
      this.ele = document.getElementById("alertentry")
      this.ele.setAttribute("style", "display:none")
      this.ele = document.getElementById("alertsuccess")
      this.ele.setAttribute("style", "display:block")
      this.apis.sendcontrct(this.contact.value.name,this.contact.value.subject,this.contact.value.email,this.contact.value.message)
    }else{
      this.sendis=false;
      this.ele = document.getElementById("alertentry")
      this.ele.setAttribute("style", "display:block")
      this.ele = document.getElementById("alertsuccess")
      this.ele.setAttribute("style", "display:none")
    }
  }

}
