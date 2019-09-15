import { Component, OnInit } from '@angular/core';

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
    deliveryName: 'มงคลทรานสปอร์ต'
  },
  {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต'
  },
  {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต'
  }, {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต'
  }, {
    shipDate: '15/09/19',
    custNo: '1190805',
    custName: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    province: 'ชลบุรี',
    subProvince: 'ภาคกลาง',
    price: '14066',
    shipTo: 'ห้างหุ้นส่วนจำกัด ชลบุรี ว.พานิช',
    deliveryName: 'มงคลทรานสปอร์ต'
  }]

  constructor() { }

  ngOnInit() {
  }

}
