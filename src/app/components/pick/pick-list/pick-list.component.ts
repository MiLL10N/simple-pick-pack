import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/api/main.service";
import { LoadingScreenService } from "../../../services/loading/loading-screen.service";
import { selectPickListModel } from 'src/app/Model/Pick';

@Component({
  selector: "app-pick-list",
  templateUrl: "./pick-list.component.html",
  styleUrls: ["./pick-list.component.css"]
})
export class PickListComponent implements OnInit {
  pickList: selectPickListModel[] = new Array();
  page: number;
  size: number;
  pickNum: string;

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private route: Router
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getPickList();
  }

  getPickList(page?) {
    this.loadingScreen.startLoading();

    this.page = page ? page : 1;
    const jsonData = {
      pickNo: this.pickNum ? this.pickNum : "",
      userID: this.mainService.user.userId,
      page: this.page,
      size: this.size
    };

    this.mainService.selectPickList(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.pickList = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
        this.pickList = new Array<selectPickListModel>();
      }
    );
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
    this.route.navigate(["/pick-list-item", pickNumber]);
  }
}

