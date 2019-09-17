import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { CONST } from '../assets/const'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpService: HttpService
  ) { }

  regionList: any[] = [];
  countryList: any[] = [];
  user : any;

  login(userName: string, password: string) {
    const jsonData = {
      userName,
      password
    };
    return this.httpService.post(CONST.url + 'PackingApi/api/User/selectUser', jsonData);
  }

  selectInvoice(jsonData) {
    return this.httpService.post(CONST.url + 'PackingApi/api/Invoice/selectInvoice', jsonData);
  }

  updateInvoice(jsonData){
    return this.httpService.post(CONST.url + 'PackingApi/api/Pick/updateInvoicePick',jsonData);
  }

  selectPickList(jsonData){
    return this.httpService.post(CONST.url + 'PackingApi/api/Pick/selectInvoicePick',jsonData);
  }

  getRegion() {
    this.httpService.get(CONST.url + 'PackingApi/api/Master/selectRegion').subscribe(resp => {
      this.regionList = resp;
    }, error => {
      alert(CONST.error);
    });
  }

  getCountry() {
    this.httpService.get(CONST.url + 'PackingApi/api/Master/selectCounty').subscribe(resp => {
      this.countryList = resp;
    }, error => {
      alert(CONST.error);
    });
  }
}
