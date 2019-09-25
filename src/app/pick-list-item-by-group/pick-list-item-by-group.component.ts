import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { LoadingScreenService } from '../loading-screen.service';

@Component({
  selector: 'app-pick-list-item-by-group',
  templateUrl: './pick-list-item-by-group.component.html',
  styleUrls: ['./pick-list-item-by-group.component.css']
})
export class PickListItemByGroupComponent implements OnInit {
  params:any;
  constructor(
    private mainService: MainService,
    private loadingScreen: LoadingScreenService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit() {
   this.activatedRoute
    .queryParams
    .subscribe(p => {
      this.params = p;
      this.selectItemByGroup(this.params);
    });
  
  }
  selectItemByGroup(params :any) {
    this.loadingScreen.startLoading();

    this.mainService.selectPickItemByGroup(params).subscribe(
      resp => {
        this.loadingScreen.stopLoading();
       console.log
      },
      error => {
        this.loadingScreen.stopLoading();
      }
    );
  }
}
