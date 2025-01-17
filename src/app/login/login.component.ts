import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MainService } from '../main.service';
import { CONST } from 'src/assets/const';

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
  };

  constructor(
    private mainService: MainService
  ) { }

  ngOnInit() {
  }

  login(loginForm: NgForm) {
    if (loginForm.valid) {
      this.mainService.login(this.loginModel.userName, this.loginModel.password).subscribe(resp => {
        this.mainService.user = resp;
        this.isLogin.emit(true);
      }, error => {
        alert(CONST.incorrectLogin);
      });
    }
  }
}
