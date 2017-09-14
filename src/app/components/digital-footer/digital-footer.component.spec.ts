import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFooterComponent } from './digital-footer.component';

describe('DigitalFooterComponent', () => {
  let component: DigitalFooterComponent;
  let fixture: ComponentFixture<DigitalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalFooterComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
