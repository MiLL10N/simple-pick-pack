import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { MainService } from "../../../services/api/main.service";
import { LoadingScreenService } from "../../../services/loading/loading-screen.service";
import { selectPickItemByGroupModel } from 'src/app/Model/Pick';

@Component({
  selector: "app-pick-list-item-by-group",
  templateUrl: "./pick-list-item-by-group.component.html",
  styleUrls: ["./pick-list-item-by-group.component.css"]
})
export class PickListItemByGroupComponent implements OnInit {
  selectPickItemlists: selectPickItemByGroupModel = new selectPickItemByGroupModel();
  params: any;
  flagConfirm: boolean;
  page: number;
  size: number;
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.activatedRoute.queryParams.subscribe(p => {
      this.params = p;
      console.log(this.params);
      this.selectItemByGroup();
    });
  }
  selectItemByGroup(page?) {
    this.page = page ? page : 1;
    const jsonData = {
      pickNo: this.params.PickNo,
      itemGrpCode:this.params.ItemGrpCode,
      page: this.page,
      size: this.size,
    };
    console.log(jsonData);
   this.flagConfirm=false;
    this.loadingScreen.startLoading();
    this.mainService.selectPickItemByGroup(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.selectPickItemlists = resp;
    
        this.selectPickItemlists.selectPickItems.forEach(item => {
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
  nextPage() {
    this.page++;
    this.selectItemByGroup(this.page);
  }

  previousPage() {
    this.page--;
    this.selectItemByGroup(this.page);
  }
}

