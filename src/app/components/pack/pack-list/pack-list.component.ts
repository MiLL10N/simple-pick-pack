import { Component, OnInit } from '@angular/core';
import { selectPackListModel } from 'src/app/Model/Pack';
import { MainService } from 'src/app/services/api/main.service';
import { LoadingScreenService } from 'src/app/services/loading/loading-screen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent implements OnInit {
  packList: selectPackListModel[] = new Array();
  page: number;
  size: number;
  pickNum: string;

  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private route: Router
  ) {}

  ngOnInit() {
    this.page = 1;
    this.size = 10;
    this.getPackList();
  }

  getPackList(page?) {
    this.loadingScreen.startLoading();

    this.page = page ? page : 1;
    const jsonData = {
      pickNo: this.pickNum ? this.pickNum : "",
      userID: this.mainService.user.userId,
      page: this.page,
      size: this.size
    };

    this.mainService.selectPackList(jsonData).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
        this.packList = resp;
      },
      error => {
        this.loadingScreen.stopLoading();
        this.packList = new Array<selectPackListModel>();
      }
    );
  }
  nextPage() {
    this.page++;
    this.getPackList(this.page);
  }

  previousPage() {
    this.page--;
    this.getPackList(this.page);
  }

  selectPackNumber(pickNumber: any) {
    this.route.navigate(["/pack-list-item", pickNumber]);
  }
}
