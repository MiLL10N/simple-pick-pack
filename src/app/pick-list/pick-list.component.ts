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

  pickList: PickModal[] = new Array();
  page: number;
  pickNum: string;

  selectedPickNumber: any = null;

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) { }

  ngOnInit() {
    this.getPickList();
  }

  getPickList(page?) {

    this.loadingScreen.startLoading();

    this.page = page?page:1;
    const jsonData = {
      pickNo: this.pickNum,
      userID: this.mainService.user.userId,
      page: this.page,
      size: 10
    };

    this.mainService.selectPickList(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.pickList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      this.pickList = new Array<PickModal>();
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
    this.selectedPickNumber = pickNumber;
  }

}

export class PickModal {
  active: boolean;
  crateUser: number
  createDate: string;
  pickNo: string;
  status: string;
  updateDate: string;
  updateUser: string;
}
