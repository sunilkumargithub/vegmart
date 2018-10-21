import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegsComponent } from './vegs.component';

describe('VegsComponent', () => {
  let component: VegsComponent;
  let fixture: ComponentFixture<VegsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
