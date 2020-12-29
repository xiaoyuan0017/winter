import { Component } from '@angular/core';
import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logins: boolean = false;
  title = 'winterShop';
  loginname: String;
  sessionlogin = sessionStorage.getItem("name")
  ele: HTMLElement;
  sesslogin() {
    if (this.sessionlogin) {
      this.logins = true;
    }
  }
  ngOnInit() {
    this.sesslogin()
    // console.log(window.location.href);
    // console.log(window.location.hostname);
    // console.log(window.location.pathname);
    
    
  }
  logouts() {
    this.logins = false;
    sessionStorage.removeItem('headimg');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('selfname');
    sessionStorage.removeItem('usercode');
    window.location.reload();
  }

  showsearch(){
    this.ele = document.getElementById("searchshop")
    this.ele.setAttribute("style", "display:block")
  }
}
