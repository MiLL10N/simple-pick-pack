import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/api/main.service";
import { LoadingScreenService } from "../../../services/loading/loading-screen.service";

@Component({
  selector: "app-pick-list-item-by-group",
  templateUrl: "./pick-list-item-by-group.component.html",
  styleUrls: ["./pick-list-item-by-group.component.css"]
})
export class PickListItemByGroupComponent implements OnInit {
  selectPickItemByGroupModel: selectPickItemByGroupModel = new selectPickItemByGroupModel();
  params: any;
  flagConfirm: boolean;
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p => {
      this.params = p;
      this.selectItemByGroup();
    });
  }
  selectItemByGroup() {
   this.flagConfirm=false;
    this.loadingScreen.startLoading();
    this.mainService.selectPickItemByGroup(this.params).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        console.log(resp);
        this.selectPickItemByGroupModel = resp;
    
        this.selectPickItemByGroupModel.selectPickItems.forEach(item => {
          if (item.flagPick == false) {
            this.flagConfirm = true;
          }
        });
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
  updatePickConfirm() {
    this.mainService.updatePickConfirm(this.params).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.route.navigate(["/pick-list-item", this.params.PickNo]);
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
  selectPickItems: selectPickItem[];
}
export class selectPickItem {
  binCode: string;
  dscription: string;
  isbn: string;
  itemCode: string;
  quantity: number;
  flagPick: any;
}
