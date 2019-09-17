import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  // tslint:disable-next-line: variable-name
  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject();

  get loading(): boolean {
    return this._loading;
  }

  set loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    document.getElementById('mainBody').style.overflow = 'hidden';
    this.loading = true;
  }

  stopLoading() {
    document.getElementById('mainBody').style.removeProperty('overflow');
    this.loading = false;
  }

  constructor() { }
}