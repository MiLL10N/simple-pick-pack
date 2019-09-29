import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/api/main.service';
import { CONST } from 'src/assets/const';
import { LoadingScreenService } from '../../../services/loading/loading-screen.service';
import { selectInvoiceModel } from 'src/app/Model/order';

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
  invoiceList: selectInvoiceModel[] = new Array();
  page: number;
  size:number;

  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) { }

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.searchData();
 
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
      size: this.size
    };
    this.mainService.selectInvoice(jsonData).subscribe(resp => {
      this.loadingScreen.stopLoading();
      this.invoiceList = resp;
    }, error => {
      this.loadingScreen.stopLoading();
      this.invoiceList = new Array<selectInvoiceModel>();
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
