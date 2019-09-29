import { LoadingScreenService } from "../../../services/loading/loading-screen.service";
import { MainService } from "../../../services/api/main.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { selectPickItemGroupModel } from 'src/app/Model/Pick';

@Component({
  selector: "app-pick-list-item",
  templateUrl: "./pick-list-item.component.html",
  styleUrls: ["./pick-list-item.component.css"]
})
export class PickListItemComponent implements OnInit {
  pickNumber: string;
  pickItemGroup: selectPickItemGroupModel[];
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
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

  selectItemByGroup(itemGrpCode: string) {
    this.route.navigate(["/pick-list-item-by-group"], {
      queryParams: {
        ItemGrpCode: itemGrpCode,
        PickNo: this.pickNumber,
      }
    });
  }
}
