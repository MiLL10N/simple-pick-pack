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
    if (loginForm.valid) {
      this.isLogin.emit(true);
    }
  }
}
