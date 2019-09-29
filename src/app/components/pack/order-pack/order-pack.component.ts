import { selectPickForPack } from "./../../../Model/Pack";
import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import { CONST } from "src/assets/const";

@Component({
  selector: "app-order-pack",
  templateUrl: "./order-pack.component.html",
  styleUrls: ["./order-pack.component.css"]
})
export class OrderPackComponent implements OnInit {
  marketArea = "";
  province = "";
  custName = "";
  docNo = "";
  startDate: string;
  endDate: string;
  page: number;
  size: number;
  pickNo: string;
  selectPickForPackList: selectPickForPack[] = new Array();
  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.selectPickForPack();
  }
  selectPickForPack(page?) {
    this.page = page ? page : 1;
    this.loadingScreen.startLoading();
    const jsonData = {
      startDocDueDate: this.startDate,
      endDocDueDate: this.endDate,
      county: this.province,
      docNum: this.docNo,
      region: this.marketArea,
      cardName: this.custName,
      page: this.page,
      size: this.size,
      pickNo: this.pickNo
    };
    this.mainService.selectPickForPack(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectPickForPackList = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
  nextPage() {
    this.page++;
    this.selectPickForPack(this.page);
  }

  previousPage() {
    this.page--;
    this.selectPickForPack(this.page);
  }

  checkSelected() {
    for (const item of this.selectPickForPackList) {
      if (item.isSelected) {
        return true;
      }
    }
    return false;
  }

  checkAll(this: any) {
    const isSelected = !this.checkSelected();
    for (const item of this.invoiceList) {
      item.isSelected = isSelected;
    }
  }
  addPackList() {
    this.loadingScreen.startLoading();
    const jsonData = {
      docNums: this.pushSelectData(),
      userId: this.mainService.user.userId
    };
    console.log(jsonData);
    this.mainService.updateOrderPack(jsonData).subscribe(resp => {
      this.selectPickForPack();
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }
  pushSelectData() {
    const selectedString = [];
    for (const item of this.selectPickForPackList) {
      if (item.isSelected) {
        selectedString.push(item.docNum);
      }
    }
    return selectedString;
  }
}
