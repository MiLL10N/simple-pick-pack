import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostConfirmListComponent } from './post-confirm-list.component';

describe('PostConfirmListComponent', () => {
  let component: PostConfirmListComponent;
  let fixture: ComponentFixture<PostConfirmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostConfirmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostConfirmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
