import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { CONST } from 'src/assets/const';
import { LoadingScreenService } from '../loading-screen.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  marketArea = '';
  province = '';
  custName = '';
  docNo = '';
  startDate: string;
  endDate: string;
  invoiceList: InvoiceModel[] = new Array();
  page: number;

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) { }

  ngOnInit() {
    this.searchData();
    this.page = 1;
  }

  searchData(page?) {
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
      size: 10
    };
    this.mainService.selectInvoice(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.invoiceList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      this.invoiceList = new Array<InvoiceModel>();
    });
  }

  nextPage() {
    this.page++;
    this.searchData(this.page);
  }

  previousPage() {
    this.page--;
    this.searchData(this.page);
  }

  checkSelected() {
    for (const item of this.invoiceList) {
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

  addPickList() {
    this.loadingScreen.startLoading();
    const jsonData = {
      docNums: this.pushSelectData(),
      userId: this.mainService.user.userId
    };

    this.mainService.updateInvoice(jsonData).subscribe(resp => {
      this.searchData();
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }

  pushSelectData() {
    const selectedString = [];
    for (const item of this.invoiceList) {
      if (item.isSelected) {
        selectedString.push(item.docNum);
      }
    }
    return selectedString;
  }

}

export class InvoiceModel {
  docNum: string;
  docDate: string;
  docDueDate: string;
  cardCode: string;
  cardName: string;
  county: string;
  descript: string;
  price: string;
  shipToCode: string;
  transporter: string;
  address: string;
  remark: string;
  isSelected = false;
}
