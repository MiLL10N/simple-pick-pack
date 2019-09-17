import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { LoadingScreenService } from '../loading-screen.service';
import { CONST } from 'src/assets/const';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  simplePickList = [{
    pickNumber: 10091900003,
    status: 'Open',
    price: 300000,
  }];

  pickNum: string;

  selectedPickNumber: any = null;

  constructor(
    private mainService: MainService,
    private loadingScreen : LoadingScreenService
  ) { }

  ngOnInit() {
    this.getPickList();
  }

  getPickList() {
    const jsonData = {
      pickNo: this.pickNum,
      userID: this.mainService.user.userId,
      page: 1,
      size: 10
    };

    this.mainService.selectPickList(jsonData).subscribe(resp=>{
      this.loadingScreen.stopLoading();
    },error =>{
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }

  selectPickNumber(pickNumber: any) {
    this.selectedPickNumber = pickNumber;
  }

}
