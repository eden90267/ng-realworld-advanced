import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgModel} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('email')
  email: NgModel; // 接樣板變數

  @ViewChild('emailDOM')
  emailDOM: ElementRef; // 接樣板變數


  loginData = {
    email: 'eden90267@gmail.com',
    password: '123456789'
  };

  // router：路由的設定調整
  constructor(private router: Router) {
  }

  ngOnInit() {
    const elm: HTMLInputElement = this.emailDOM.nativeElement;
    console.log(elm);
  }

  doLogin() {
    // 登入
    this.router.navigate(['/', 'posts'], {
      queryParams: {
        foo: 'bar'
      }
    });
    // this.router.navigateByUrl('/posts');
  }

  formSubmit(event) {
    console.log(event);
  }

}
