import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MainService } from "../main.service";
import { LoadingScreenService } from "../loading-screen.service";

@Component({
  selector: "app-pick-list-item-by-group",
  templateUrl: "./pick-list-item-by-group.component.html",
  styleUrls: ["./pick-list-item-by-group.component.css"]
})
export class PickListItemByGroupComponent implements OnInit {
  selectPickItemByGroupModel:  selectPickItemByGroupModel =new selectPickItemByGroupModel();
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p => {
      this.selectItemByGroup(p);
    });
 
  }
  selectItemByGroup(params: any) {
    this.loadingScreen.startLoading();
    this.mainService.selectPickItemByGroup(params).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectPickItemByGroupModel=resp;
        console.log( this.selectPickItemByGroupModel);
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
}
export class selectPickItemByGroupModel {
  itemGrpCode: string;
  docDueDate: string;
  pickNo: string;
  itemGrpName: string;
  selectPickItems:selectPickItem[]
}
export class selectPickItem {
  binCode: string
  dscription:string
  isbn: string
  itemCode: string
  quantity: number
  flagPick: boolean=true
}