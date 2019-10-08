import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import { ActivatedRoute, Router } from "@angular/router";
import { selectPackListForConfirm, packListForConfirm } from "src/app/Model/Pack";
import { CONST } from "src/assets/const";

@Component({
  selector: "app-pack-confirm",
  templateUrl: "./pack-confirm.component.html",
  styleUrls: ["./pack-confirm.component.css"]
})
export class PackConfirmComponent implements OnInit {
  packConfirmList: selectPackListForConfirm = new selectPackListForConfirm();
  params: any;
  packNumber: string;
  page: number;
  size: number;

  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.packNumber = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPackConfirmList();
  }
  updatePackRecheckIsbn(item :packListForConfirm) {
    const jsonData = {
      packNo: this.packNumber,
      docNum: item.docNum,
      itemCode: item.itemCode,
      isbnRecheck: item.isbnRecheck,
      package: item.package,
      unit: item.unit,
      userId: this.mainService.user.userId
    };
    console.log(jsonData);
    this.mainService.updatePackRecheckIsbn(jsonData).subscribe(
      resp => {
        console.log("success");
      },
      error => {
        alert(CONST.error);
      }
    );
  }
  getPackConfirmList(page?) {
    this.loadingScreen.startLoading();

    this.page = page ? page : 1;
    const jsonData = {
      packNo: this.packNumber ? this.packNumber : "",
      page: this.page,
      size: this.size
    };

    this.mainService.selectPackListForConfirm(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.packConfirmList = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
        this.packConfirmList = new selectPackListForConfirm();
      }
    );
  }
  CreatePack() {
    this.loadingScreen.startLoading();
    this.mainService.updatePackConfirm(this.buildData()).subscribe(
      resp => {
        this.route.navigateByUrl("/pack-list");
      },
      error => {
        this.loadingScreen.stopLoading();
        alert(CONST.error);
      }
    );
  }

  buildData() {
    const updatePack: any = [];
    // this.packConfirmList.packListForConfirms
    //   .filter(i => i.isbnRecheck != null)
    //   .forEach(x => {
    //     updatePack.push({
    //       itemCode: x.itemCode,
    //       docNum: x.docNum
    //     });
    //   });

    const json = {
      packNo: this.packConfirmList.packNo,
      package: this.packConfirmList.package,
      unit: this.packConfirmList.unit,
      userId: this.mainService.user.userId,
      // updatePackConfirms: updatePack
    };
 
    return json;
  }
  nextPage() {
    this.page++;
    this.getPackConfirmList(this.page);
  }

  previousPage() {
    this.page--;
    this.getPackConfirmList(this.page);
  }
}
