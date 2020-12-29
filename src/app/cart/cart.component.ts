import { Component, OnInit ,ElementRef} from '@angular/core';
import { ApiService } from "../api.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../environments/environment";
const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartdata: [];
  userdata;
  numvalue = 1;
  pricecounts;
  constructor(private apis: ApiService, private http: HttpClient,public ref: ElementRef) { }

  ngOnInit() {
    this.http.post<any>(`${environment.api_url}/cartlist`, { email: sessionStorage.getItem("name") }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            this.cartdata = data.data;
            this.userdata = data.userdata;
            // console.log(this.userdata);
            // console.log(this.cartdata);
            setTimeout(() => {
              let pricenum = document.getElementsByClassName("pricecount")
              let num = 0;
              for (let index = 0; index < pricenum.length; index++) {
                num += Number(pricenum[index].innerHTML.substr(1))
              }
              this.pricecounts = num;
            }, 2000);
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
  dec(event) {
    if (event.target.parentNode.nextSibling.value == 1) {
    } else {
      event.target.parentNode.nextSibling.value -= 1
      let countmoeny = event.target.parentNode.parentNode.parentNode.previousSibling.innerText.substr(1) * event.target.parentNode.nextSibling.value
      event.target.parentNode.parentNode.parentNode.nextSibling.innerText = "$" + countmoeny
      let pricenum = document.getElementsByClassName("pricecount")
      let num = 0;
      for (let index = 0; index < pricenum.length; index++) {
        // console.log(pricenum[index].innerHTML.substr(1));
        num += Number(pricenum[index].innerHTML.substr(1))
      }
      this.pricecounts = num;
    }
  }
  inc(event) {
    event.target.parentNode.previousSibling.value = Number(event.target.parentNode.previousSibling.value) + 1;
    let countmoeny = event.target.parentNode.parentNode.parentNode.previousSibling.innerText.substr(1) * event.target.parentNode.previousSibling.value
    event.target.parentNode.parentNode.parentNode.nextSibling.innerText = "$" + countmoeny
    let pricenum = document.getElementsByClassName("pricecount")
    let num = 0;
    for (let index = 0; index < pricenum.length; index++) {
      // console.log(pricenum[index].innerHTML.substr(1));
      num += Number(pricenum[index].innerHTML.substr(1))
    }
    this.pricecounts = num;
    // console.log(countmoeny);
  }
  detail() {
    let country = this.ref.nativeElement.querySelector('#shopcoutrny').value
    let address = this.ref.nativeElement.querySelector('#shopaddress').value
    let postcode = this.ref.nativeElement.querySelector('#shopostcode').value
    this.apis.updateinfo(country,address,postcode)
  }
  
  removecart(event){
    let removes = event.target.childNodes[0].innerText;
    event.target.parentNode.parentNode.innerHTML="";
    // console.log(event.target.parentNode.parentNode);
    let pricenum = document.getElementsByClassName("pricecount")
    let num = 0;
    for (let index = 0; index < pricenum.length; index++) {
      // console.log(pricenum[index].innerHTML.substr(1));
      num += Number(pricenum[index].innerHTML.substr(1))
    }
    this.pricecounts = num;
    this.apis.removecart(removes)
  }
}
