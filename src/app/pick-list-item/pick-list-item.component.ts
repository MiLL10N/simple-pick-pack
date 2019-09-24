import { LoadingScreenService } from "./../loading-screen.service";
import { MainService } from "./../main.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-pick-list-item",
  templateUrl: "./pick-list-item.component.html",
  styleUrls: ["./pick-list-item.component.css"]
})
export class PickListItemComponent implements OnInit {
  pickNumber: string;
  pickItemGroup: PickItemGroupModel[];
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.pickNumber = this.activatedRoute.snapshot.paramMap.get("id");
    this.selectPickNumber(this.pickNumber);
  }

  selectPickNumber(pickNumber: any) {
    this.loadingScreen.startLoading();
    this.pickItemGroup = null;
    this.mainService.selectPickItemGroup(pickNumber).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.pickItemGroup = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
}
export class PickItemGroupModel {
  itemGrpCode: string;
  itemGrpName: string;
  qty: number;
  price:number
}
