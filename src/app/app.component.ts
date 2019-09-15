import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple-pick-pack';
  isLogin = false;

  constructor(
    private route : Router
  ){}

  invokeLogin(e: any) {
    this.isLogin = e;
    this.route.navigateByUrl('/order-list');
  }

}
