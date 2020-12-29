import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../environments/environment";
import { EmailValidator } from '@angular/forms';


const headers = new HttpHeaders().set(
  "Content-type", "application/json; charset=UTF-8"
);
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  shopdata: [];
  blogdataing: [];
  blogpage: string;

  subdis = false;
  logindis = false;
  passtatus = false;
  blogimg = false;
  element: HTMLElement;
  element1: HTMLElement;
  constructor(private http: HttpClient) {
    // this.element1.setAttribute("style", "display:none")
  }
  // signup
  adduser(email, username, pass, code) {
    // console.log(`${environment.api_url}/signup`)
    if (code == sessionStorage.getItem("usercode")) {
      this.http.post<any>(`${environment.api_url}/signup`, { email: email, username: username, pass: pass }, { headers }).subscribe(
        {
          next: data => {
            if (data.status == 200) {
              sessionStorage.removeItem("usercode")
              window.location.href = `${environment.web_url}success`
            }
            if (data.status == 304) {
              this.subdis = false;
              this.element = document.getElementById("alertsignup")
              this.element.setAttribute("style", "display:block")
              this.element = document.getElementById("coderroe")
              this.element.setAttribute("style", "display:none")
            }
          },
          error: error => {
            console.log(error);
            console.error('There was an error!', error)
          }
        }
      );
    } else {
      this.subdis = false;
      this.element = document.getElementById("coderroe")
      this.element.setAttribute("style", "display:block")
    }

  }
  // login
  login(lon, lop) {
    // const headers = new HttpHeaders().set(
    //   "Content-type", "application/json; charset=UTF-8"
    // );
    // console.log(lon);
    this.logindis = true;
    this.http.post<any>(`${environment.api_url}/login`, { user: lon, pass: lop }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // console.log('okokok');
            // console.log(data.status);
            // console.log(data.data);
            this.logindis = false;

            sessionStorage.setItem("name", lon)
            sessionStorage.setItem("selfname", data.data)
            if (data.img) {
              sessionStorage.setItem("headimg", data.img)
            } else {
              sessionStorage.setItem("headimg", "")
            }
            window.location.href = `${environment.web_url}home`
          }
          if (data.status == 304) {
            this.logindis = false;
            this.element1 = document.getElementById("alertlogin")
            this.element1.setAttribute("style", "display:none")
            this.element = document.getElementById("alerterror")
            this.element.setAttribute("style", "display:block")
            // console.log(data.status);
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
  usercode(email, code) {
    this.http.post<any>(`${environment.api_url}/codes`, { useremail: email, usercode: code }, { headers }).subscribe(
      {
        next: data => {

          // if (data.status == 200) {
          //   sessionStorage.setItem("usercode", usercode)
          // }
        }
        ,
        error: error => {
          console.log(error);
          console.error('There was an error!', error)
        }
      }
    );
  }
  photos(updatephoto) {
    const headers = new HttpHeaders().set(
      "Content-type", "application/json; charset=UTF-8"
    );
    // console.log(lon);

    this.http.post<any>(`${environment.api_url}/headphoto`,
      {
        uesremail: sessionStorage.getItem("name"),
        headimg: updatephoto,
      },
      { headers }).subscribe(
        {
          next: data => {
            if (data.status == 200) {
              console.log(data.img);
              sessionStorage.setItem("headimg", data.img)
              // this.element = document.getElementById("upload");
              // this.element.setAttribute("src", sessionStorage.getItem("headimg"))
              // location.reload();
              // window.location.href = `${environment.web_url}home`
            }
            if (data.status == 304) {
              console.log(data.status);
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
  personaldataupdate(userphone) {
    const headers = new HttpHeaders().set(
      "Content-type", "application/json; charset=UTF-8"
    );
    // console.log(lon);

    this.http.post<any>(`${environment.api_url}/updatepersonal`,
      {
        uesremail: sessionStorage.getItem("name"),
        // uname: username,
        uphone: userphone
      },
      { headers }).subscribe(
        {
          next: data => {

            if (data.status == 200) {
              alert("update success")
              location.reload();
              // window.location.href = `${environment.web_url}home`
            }
            if (data.status == 304) {
              console.log(data.status);
              alert('account and password is error or account is not null...')
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
  // submit shop   sname, simg, skind, snum, sprice, sdetaild
  subshop(shopname, shopkind, nums, price, shopinfo, fileSource, fileSource1, fileSource2) {
    const headers = new HttpHeaders().set(
      "Content-type", "application/json; charset=UTF-8"
    );
    // console.log(lon);

    this.http.post<any>(`${environment.api_url}/postshop`,
      {
        bname: shopname,
        bimg: fileSource,
        bimg1: fileSource1,
        bimg2: fileSource2,
        bkind: shopkind,
        snum: nums,
        bprice: price,
        sdetaild: shopinfo,
      },
      { headers }).subscribe(
        {
          next: data => {

            if (data.status == 200) {
              alert('post shop success...')
              location.reload();
              // window.location.href = `${environment.web_url}home`
            }
            if (data.status == 304) {
              console.log(data.status);
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
  passwordupdate(passupdate) {
    this.http.post<any>(`${environment.api_url}/changepass`,
      {
        updatespass: passupdate
      },
      { headers }).subscribe(
        {
          next: data => {
            if (data.status == 200) {
              alert('already send,please check you eamil message...')
              location.reload();
              // window.location.href = `${environment.web_url}home`
            }
            if (data.status == 304) {
              this.passtatus = false;
              this.element = document.getElementById("aldont")
              this.element.setAttribute("style", "display:block")
              // window.location.href = `${environment.web_url}home`
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
  // get shop list
  shoplist() {
    this.http.get<any>(`${environment.api_url}/shoplist`, { headers }).subscribe(
      {
        next: data => {

          if (data.status == 200) {
            // console.log(data.status);
            // console.log(data.data);
            // console.log('2');

            this.shopdata = data.data;

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

  // send blog 
  sendblog(title, subject, blogimg, blogtxt) {
    this.http.post<any>(`${environment.api_url}/sendblog`, {
      useremail: sessionStorage.getItem("name"),
      title: title,
      selfname: sessionStorage.getItem("selfname"),
      subject: subject,
      blogimg: blogimg,
      blogtxt: blogtxt,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            alert("post blog success...")
            window.location.reload()
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

  // send comment about blog
  postcomment(blogcomment) {
    // console.log(sessionStorage.getItem("headimg"));
    let blodid = window.location.pathname.substr(11);
    this.http.post<any>(`${environment.api_url}/postcomment`, {
      userimg: sessionStorage.getItem("headimg"),
      username: sessionStorage.getItem("selfname"),
      blogid: blodid,
      comment: blogcomment,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            alert("post comment success...")
            window.location.reload()
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

  // add shop card  and shop cart sub
  addshopcard(shopcart) {
    this.http.post<any>(`${environment.api_url}/cartid`, {
      useremail: sessionStorage.getItem("name"),
      cartids: shopcart,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // alert("post comment success...")
            // window.location.reload()
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

  // remote shop cart
  removecart(removes) {
    this.http.post<any>(`${environment.api_url}/deleteshopcart`, {
      useremail: sessionStorage.getItem("name"),
      deletecart: removes,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // alert("post comment success...")
            // window.location.reload()
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

  updateinfo(country, address, postcode) {
    this.http.post<any>(`${environment.api_url}/updateshopinfo`, {
      email: sessionStorage.getItem("name"),
      country: country,
      address: address,
      postcode: postcode,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // alert("post comment success...")
            // window.location.reload()
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

  // paypal
  sendpaypal(price) {
    this.http.post<any>(`${environment.api_url}/sendpaypal`, {
      useremail: sessionStorage.getItem("name"),
      cartprice: price,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // alert("post comment success...")
            // window.location.reload()
            console.log(data.hrefs);
            
            window.open(data.hrefs)
            // window.location.href = data.hrefs
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

  // contact
  sendcontrct(name, subject, email, message) {
    this.http.post<any>(`${environment.api_url}/sendcontrct`, {
      name: name,
      subject: subject,
      email: email,
      message: message,
    }, { headers }).subscribe(
      {
        next: data => {
          if (data.status == 200) {
            // alert("post comment success...")
            setTimeout(() => {
              window.location.reload()
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


}


