import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { LoadingScreenService } from '../loading-screen.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  pickList: PickModel[] = new Array();
  page: number;
  pickNum: string;

  pickItemGroup: PickItemGroupModel[];

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) { }

  ngOnInit() {
    this.getPickList();
  }

  getPickList(page?) {

    this.loadingScreen.startLoading();
    this.pickItemGroup = null;
    this.page = page ? page : 1;
    const jsonData = {
      pickNo: this.pickNum ? this.pickNum : '',
      userID: this.mainService.user.userId,
      page: this.page,
      size: 10
    };

    this.mainService.selectPickList(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.pickList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      this.pickList = new Array<PickModel>();
    });
  }

  nextPage() {
    this.page++;
    this.getPickList(this.page);
  }

  previousPage() {
    this.page--;
    this.getPickList(this.page);
  }

  selectPickNumber(pickNumber: any) {
    this.loadingScreen.startLoading();
    this.pickItemGroup = null;
    this.mainService.selectPickItemGroup(pickNumber).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.pickItemGroup = resp;
    }, error => {
      this.loadingScreen.stopLoading();
    });
  }

}

export class PickModel {
  active: boolean;
  crateUser: number;
  createDate: string;
  pickNo: string;
  status: string;
  updateDate: string;
  updateUser: string;
  totalPrice: number;
}

export class PickItemGroupModel {
  itemGrpCode: string;
  itemGrpName: string;
  qty: number;
}