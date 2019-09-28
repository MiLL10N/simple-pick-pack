import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { CONST } from '../../../assets/const'

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private httpService: HttpService
  ) { }

  regionList: any[] = [];
  countryList: any[] = [];
  user: any;

  login(userName: string, password: string) {
    const jsonData = {
      userName,
      password
    };
    return this.httpService.post(CONST.url + '/api/User/selectUser', jsonData);
  }

  selectInvoice(jsonData) {
    return this.httpService.post(CONST.url + '/api/Invoice/selectInvoice', jsonData);
  }

  updateInvoice(jsonData) {
    return this.httpService.post(CONST.url + '/api/Pick/updateInvoicePick', jsonData);
  }

  selectPickList(jsonData) {
    return this.httpService.post(CONST.url + '/api/Pick/selectInvoicePick', jsonData);
  }

  selectPickItemGroup(pickNo: number) {
    return this.httpService.get(CONST.url + '/api/Pick/selectPickItemGroup/' + pickNo);
  }

  selectPickItemByGroup(jsonData) {
    return this.httpService.post(CONST.url + '/api/Pick/selectPickItemByGroup/' , jsonData);
  }
  updatePickConfirm(jsonData) {
    return this.httpService.post(CONST.url + '/api/Pick/updatePickConfirm/' , jsonData);
  }
  selectPickForPack(jsonData) {
    return this.httpService.post(CONST.url + '/api/Pack/selectPickForPack/' , jsonData);
  }
  
  getRegion() {
    this.httpService.get(CONST.url + '/api/Master/selectRegion').subscribe(resp => {
      this.regionList = resp;
    }, error => {
      alert(CONST.error);
    });
  }

  getCountry() {
    this.httpService.get(CONST.url + '/api/Master/selectCounty').subscribe(resp => {
      this.countryList = resp;
    }, error => {
      alert(CONST.error);
    });
  }
}
