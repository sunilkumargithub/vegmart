import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegsitemComponent } from './vegsitem.component';

describe('VegsitemComponent', () => {
  let component: VegsitemComponent;
  let fixture: ComponentFixture<VegsitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegsitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegsitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
