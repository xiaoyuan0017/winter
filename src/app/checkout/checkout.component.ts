import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  paydis = false;
  ele: HTMLElement;
  countmoney: Number;
  constructor(public route: ActivatedRoute, private apis: ApiService) { }
  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      console.log('val:', this.countmoney = 5 + Number(val.price))
    })
  }
  cardradio() {
    alert("test...")
    this.ele = document.getElementById("cardlist")
    this.ele.setAttribute("style", "display:block")
    this.ele = document.getElementById("paypal")
    this.ele.setAttribute("style", "display:none")
  }
  payradio() {
    this.ele = document.getElementById("cardlist")
    this.ele.setAttribute("style", "display:none")
    this.ele = document.getElementById("paypal")
    this.ele.setAttribute("style", "display:block")
  }

  paypalnow() {
    this.paydis = true;
    this.apis.sendpaypal(this.countmoney)
  }

}
