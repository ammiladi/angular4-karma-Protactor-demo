import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalHeaderComponent } from './digital-header.component';

describe('DigitalHeaderComponent', () => {
  let component: DigitalHeaderComponent;
  let fixture: ComponentFixture<DigitalHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
