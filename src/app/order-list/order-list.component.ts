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
  toDay: string;
  startDate: string;
  endDate: string;
  invoiceList: InvoiceModel[] = new Array();
  page: number;

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) { }

  ngOnInit() {
    this.toDay = new Date().getFullYear() + '-' + (((new Date().getMonth() + '').length === 1 ?
      ('0' + (new Date().getMonth() + 1)) : new Date().getMonth() + 1)) + '-' + new Date().getDate();
    this.startDate = this.toDay;
    this.endDate = this.toDay;
    this.searchData();
    this.page = 1;
  }

  searchData(page?) {
    this.page = page?page:1;
    this.loadingScreen.startLoading();
    const jsonData = {
      docDueDate: '',
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
      alert(CONST.error);
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
    for (let item of this.invoiceList) {
      item.isSelected = isSelected;
    }
  }

  addPickList() {
    const jsonData = {
      docNums: this.pushSelectData(),
      userId: this.mainService.user.userId
    };

    this.mainService.updateInvoice(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.invoiceList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }

  search() {
    this.loadingScreen.startLoading();
    const jsonData = {
      docDueDate: '',
      county: '',
      docNum: '',
      region: '',
      cardName: '',
      page: this.page,
      size: 10
    };

    this.mainService.selectInvoice(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.invoiceList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });
  }

  pushSelectData() {
    let selectedString = [];
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
