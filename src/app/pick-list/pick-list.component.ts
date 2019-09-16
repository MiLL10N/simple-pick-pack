import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.css']
})
export class PickListComponent implements OnInit {

  simplePickList = [{
    pickNumber: 10091900003,
    status: 'Open',
    price: 300000,
    pickNumberDetail : [
      {
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      },
      {
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      },{
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      },{
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      },{
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      },{
        itemGroup: 'F1-คู่มือ',
        desc: 'something'
      }
    ]
  }];

  selectedPickNumber : any = null;

  constructor() { }

  ngOnInit() {
  }

  selectPickNumber(pickNumber: any) {
    this.selectedPickNumber = pickNumber;
  }

}
