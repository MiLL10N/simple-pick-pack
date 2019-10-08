import { Component, OnInit } from '@angular/core';
import { selectDocumentPrintingListModel } from 'src/app/Model/Pack';
import { LoadingScreenService } from 'src/app/services/loading/loading-screen.service';
import { MainService } from 'src/app/services/api/main.service';
import { CONST } from 'src/assets/const';
import { Router } from '@angular/router';

@Component({
  selector: 'app-document-printing',
  templateUrl: './document-printing.component.html',
  styleUrls: ['./document-printing.component.css']
})
export class DocumentPrintingComponent implements OnInit {
  marketArea = "";
  province = "";
  custName = "";
  docNo = "";
  startDate: string;
  endDate: string;
  page: number;
  size: number;
  pickNo: string;
  selectDocumentPrintingList: selectDocumentPrintingListModel[] = new Array();

  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private route: Router
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
    this.mainService.selectDocumentPrintingList(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectDocumentPrintingList = resp;
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
    for (const item of this.selectDocumentPrintingList) {
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
    this.mainService.updateOrderPack(jsonData).subscribe(resp => {
      this.selectPickForPack();
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }
  pushSelectData() {
    const selectedString = [];
    for (const item of this.selectDocumentPrintingList) {
      if (item.isSelected) {
        selectedString.push(item.docNum);
      }
    }
    return selectedString;
  }
  selectPackConfirm(packNumber: any) {
    this.route.navigate(["/pack-confirm", packNumber]);
  }
}
