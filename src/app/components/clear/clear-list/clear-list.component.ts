import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import {  selectClearListModel } from "src/app/Model/clear";
import { CONST } from 'src/assets/const';

@Component({
  selector: 'app-clear-list',
  templateUrl: './clear-list.component.html',
  styleUrls: ['./clear-list.component.css']
})
export class ClearListComponent implements OnInit {
  marketArea = "";
  province = "";
  custName = "";
  docNo = "";
  startDate: string;
  endDate: string;
  page: number;
  size: number;
  pickNo: string;
  selectClearLists: selectClearListModel[] = new Array();
  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.selectClearList();
  }
  selectClearList(page?) {
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
    this.mainService.selectClearList(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectClearLists = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
  nextPage() {
    this.page++;
    this.selectClearList(this.page);
  }

  previousPage() {
    this.page--;
    this.selectClearList(this.page);
  }
  
}
