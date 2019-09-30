import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import { ActivatedRoute, Router } from "@angular/router";
import { selectPackListForConfirm } from "src/app/Model/Pack";

@Component({
  selector: "app-pack-confirm",
  templateUrl: "./pack-confirm.component.html",
  styleUrls: ["./pack-confirm.component.css"]
})
export class PackConfirmComponent implements OnInit {
  packConfirmList: selectPackListForConfirm[] = new Array();
  params: any;
  packNumber: string;
  page: number;
  size: number;
  packagelists = ["Pakage A", "Pakage B", "Pakage C", "Pakage D"];
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.packNumber = this.activatedRoute.snapshot.paramMap.get("id");
    this.getPackConfirmList();
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
        this.packConfirmList = new Array<selectPackListForConfirm>();
      }
    );
  }
  CreatePack() {
    console.log(this.packConfirmList);
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
