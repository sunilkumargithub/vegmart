import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegsdetailComponent } from './vegsdetail.component';

describe('VegsdetailComponent', () => {
  let component: VegsdetailComponent;
  let fixture: ComponentFixture<VegsdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegsdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
