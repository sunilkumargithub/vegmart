import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegslistComponent } from './vegslist.component';

describe('VegslistComponent', () => {
  let component: VegslistComponent;
  let fixture: ComponentFixture<VegslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
