import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditvegComponent } from './editveg.component';

describe('EditvegComponent', () => {
  let component: EditvegComponent;
  let fixture: ComponentFixture<EditvegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditvegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditvegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
