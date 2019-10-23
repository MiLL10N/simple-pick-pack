import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageStockComponent } from './package-stock.component';

describe('PackageStockComponent', () => {
  let component: PackageStockComponent;
  let fixture: ComponentFixture<PackageStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
