import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLogin = new EventEmitter<boolean>();

  loginModel = {
    userName: '',
    password: ''
  }

  constructor() { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    console.log('loginForm : ', loginForm);
    // this.isLogin.emit(true);
  }
}
