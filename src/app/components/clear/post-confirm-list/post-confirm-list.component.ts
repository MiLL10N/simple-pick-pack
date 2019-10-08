import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import { selectPostConfirmListModel } from "src/app/Model/clear";
import { CONST } from 'src/assets/const';


@Component({
  selector: "app-post-confirm-list",
  templateUrl: "./post-confirm-list.component.html",
  styleUrls: ["./post-confirm-list.component.css"]
})
export class PostConfirmListComponent implements OnInit {
  marketArea = "";
  province = "";
  custName = "";
  docNo = "";
  startDate: string;
  endDate: string;
  page: number;
  size: number;
  pickNo: string;
  selectPostConfirmList: selectPostConfirmListModel[] = new Array();
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
      size: this.size
    };
    this.mainService.selectPostConfirmList(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectPostConfirmList = resp;
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
  updatePostConfirm(item: selectPostConfirmListModel) {
    const jsonData = {
      docNum: item.docNum,
      TrackNumber: item.trackNumber,
      flagClear: item.flagClear,
      userId: this.mainService.user.userId
    };

    this.mainService.updatePostConfirm(jsonData).subscribe(
      resp => {
        console.log("success");
      },
      error => {
        alert(CONST.error);
      }
    );
  }
}
