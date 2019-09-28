import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from './services/api/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Packing System';
  isLogin = false;

  constructor(
    private route: Router,
    private mainService: MainService
  ) { }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    this.mainService.getRegion();
    this.mainService.getCountry();
  }

  invokeLogin(e: any) {
    this.isLogin = e;
    this.route.navigateByUrl('/order-list');
  }

}
