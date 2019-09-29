import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackConfirmComponent } from './pack-confirm.component';

describe('PackConfirmComponent', () => {
  let component: PackConfirmComponent;
  let fixture: ComponentFixture<PackConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
