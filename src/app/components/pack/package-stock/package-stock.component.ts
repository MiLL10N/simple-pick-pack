import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/api/main.service";
import { LoadingScreenService } from "../../../services/loading/loading-screen.service";
import { selectPackageStock } from "src/app/Model/Pack";
import { CONST } from "src/assets/const";
@Component({
  selector: "app-package-stock",
  templateUrl: "./package-stock.component.html",
  styleUrls: ["./package-stock.component.css"]
})
export class PackageStockComponent implements OnInit {
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService
  ) {}
  selectPackageStocks: selectPackageStock[] = new Array();
  newAttribute: selectPackageStock;
  page: number;
  size: number;
  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.addPackageStock();
    this.selectPackageStock();
  }

  selectPackageStock(page?) {
    this.page = page ? page : 1;
    const jsonData = {
      page: this.page,
      size: this.size
    };

    this.mainService.selectPackageStock(jsonData).subscribe(resp => {   
      this.selectPackageStocks = resp;
    });
  }
  addPackageStock() {
    const selectPackage = new selectPackageStock();
    selectPackage.active = true;
    selectPackage.qty = 0;
    selectPackage.packageId = 0;
    selectPackage.packageName = "";
    selectPackage.flagNew = true;
    this.selectPackageStocks.push(selectPackage);
  }
  removePackageStock(item: selectPackageStock) {
    const jsonData = {
      qty: item.qty,
      packageName: item.packageName,
      packageID: item.packageId,
      active: false,
      updateUser: this.mainService.user.userId,
      flagNew: false
    };
    console.log(jsonData);
    this.mainService.updatePackageStock(jsonData).subscribe(
      resp => {
        console.log("success");
        this.selectPackageStock();
      },
      error => {
        alert(CONST.error);
      }
    );
  }

  updatePackageStock(item: selectPackageStock) {
    const jsonData = {
      qty: item.qty,
      packageName: item.packageName,
      packageID: item.packageId,
      active: item.active,
      updateUser: this.mainService.user.userId,
      flagNew: item.flagNew
    };

    console.log(jsonData);
    this.mainService.updatePackageStock(jsonData).subscribe(
      resp => {
        console.log("success");
        this.selectPackageStock();
      },
      error => {
        alert(CONST.error);
      }
    );
  }
  nextPage() {
    this.page++;
    this.selectPackageStock(this.page);
  }

  previousPage() {
    this.page--;
    this.selectPackageStock(this.page);
  }
}
