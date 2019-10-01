import { Component, OnInit } from "@angular/core";
import { MainService } from "src/app/services/api/main.service";
import { LoadingScreenService } from "src/app/services/loading/loading-screen.service";
import { ActivatedRoute, Router } from "@angular/router";
import { selectPackListForConfirm } from "src/app/Model/Pack";
import { CONST } from 'dist/simple-pick-pack/assets/const';
import { pipe } from '@angular/core/src/render3';

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
  private updatePack: updatePackConfirm;
kagelists = ["Pakage A", "Pakage B", "Pakage C", "Pakage D"];  
confirmPackage={
  package:"",
  unit:0
}
  constructor(
    public mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route :Router
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
    this.loadingScreen.startLoading();
    

    this.mainService.updatePackConfirm(this.buildData()).subscribe(resp => {
      this.route.navigateByUrl('/pack-list');
 
    }, error => {
      this.loadingScreen.stopLoading();
      alert(CONST.error);
    });

  }
  buildData(){
    const updatePackConfirms = [];
  
    this.packConfirmList.filter(i=>i.isbnRecheck!=null).forEach(i=>
 
      updatePackConfirms.push({itemCode: i.itemCode,
        docNum:  i.docNum,
        packNo:this.packNumber,
        package: i.package,
        unit: i.unit,
        userId: this.mainService.user.userId,
        isbN_Recheck: i.isbnRecheck})
    )
    return updatePackConfirms;
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
export class  updatePackConfirm{
  itemCode: string;
      docNum: string;
      packNo: string;
      package: string;
      unit: number;
      userId: number;
      isbN_Recheck: string;
}