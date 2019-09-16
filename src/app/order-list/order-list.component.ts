import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  simpleDataList = [{
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต',
    isSelected: false
  },
  {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต',
    isSelected: false
  },
  {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต',
    isSelected: false
  }, {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต',
    isSelected: false
  }, {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต',
    isSelected: false
  }];

  selectedData = [];

  toDay: string;
  startDate: string;
  endDate: string;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.toDay = new Date().getFullYear() + '-' + (((new Date().getMonth() + '').length == 1 ? ('0' + (new Date().getMonth() + 1)) : new Date().getMonth() + 1)) + '-' + new Date().getDate();
    this.startDate = this.toDay;
    this.endDate = this.toDay;
  }

  checkSelected() {
    for (let item of this.simpleDataList) {
      if (item.isSelected) {
        return true;
      }
    }
    return false;
  }

  checkAll(this: any) {
    console.log('startDate ', this.startDate);
    let isSelected = !this.checkSelected()
    for (let item of this.simpleDataList) {
      item.isSelected = isSelected;
    }
  }

  search() {

  }

  pushSelectData() {
    this.selectedData = [];
    for (let item of this.simpleDataList) {
      if (item.isSelected) {
        this.selectedData.push(item);
      }
    }
  }

}
