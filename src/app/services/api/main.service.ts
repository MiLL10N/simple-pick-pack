import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { CONST } from "../../../assets/const";

@Injectable({
  providedIn: "root"
})
export class MainService {
  constructor(private httpService: HttpService) {}

  regionList: any[] = [];
  countryList: any[] = [];
  packageList: any[] = [];
  user: any;

  login(userName: string, password: string) {
    const jsonData = {
      userName,
      password
    };
    return this.httpService.post(CONST.url + "/api/User/selectUser", jsonData);
  }

  selectInvoice(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Invoice/selectInvoice",
      jsonData
    );
  }

  updateInvoice(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pick/updateInvoicePick",
      jsonData
    );
  }

  selectPickList(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pick/selectInvoicePick",
      jsonData
    );
  }

  selectPickItemGroup(pickNo: number) {
    return this.httpService.get(
      CONST.url + "/api/Pick/selectPickItemGroup/" + pickNo
    );
  }

  selectPickItemByGroup(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pick/selectPickItemByGroup/",
      jsonData
    );
  }
  printPickItemByGroup(jsonData) {
    return this.httpService.downloadDoc(
      CONST.url + "/api/Pick/printPickItemByGroup/",
      jsonData
    );
  }
  
  updatePickConfirm(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pick/updatePickConfirm/",
      jsonData
    );
  }
  selectPickForPack(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/selectPickForPack/",
      jsonData
    );
  }
  updateOrderPack(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/updateOrderPack",
      jsonData
    );
  }
  selectPackList(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/selectPackList/",
      jsonData
    );
  }
  selectPackListForConfirm(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/selectPackListForConfirm/",
      jsonData
    );
  }
  updatePackConfirm(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/updatePackConfirm/",
      jsonData
    );
  }
  updatePackRecheckIsbn(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/updatePackRecheckIsbn/",
      jsonData
    );
  }
  selectDocumentPrintingList(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Pack/selectDocumentPrintingList/",
      jsonData
    );
  }

  selectPostConfirmList(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Clear/selectPostConfirmList/",
      jsonData
    );
  }
  selectClearList(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Clear/selectClearList/",
      jsonData
    );
  }
  updatePostConfirm(jsonData) {
    return this.httpService.post(
      CONST.url + "/api/Clear/updatePostConfirm/",
      jsonData
    );
  }

  getRegion() {
    this.httpService.get(CONST.url + "/api/Master/selectRegion").subscribe(
      resp => {
        this.regionList = resp;
      },
      error => {
        alert(CONST.error);
      }
    );
  }

  getPackage() {
    this.httpService.get(CONST.url + "/api/Master/selectPackage").subscribe(
      resp => {
        this.packageList = resp;
      },
      error => {
        alert(CONST.error);
      }
    );
  }

  getCountry() {
    this.httpService.get(CONST.url + "/api/Master/selectCounty").subscribe(
      resp => {
        this.countryList = resp;
      },
      error => {
        alert(CONST.error);
      }
    );
  }
}
