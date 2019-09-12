import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestTBComponent } from './request-tb.component';

describe('RequestTBComponent', () => {
  let component: RequestTBComponent;
  let fixture: ComponentFixture<RequestTBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestTBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestTBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
