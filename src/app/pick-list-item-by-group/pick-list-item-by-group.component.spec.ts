import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickListItemByGroupComponent } from './pick-list-item-by-group.component';

describe('PickListItemByGroupComponent', () => {
  let component: PickListItemByGroupComponent;
  let fixture: ComponentFixture<PickListItemByGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickListItemByGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickListItemByGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
