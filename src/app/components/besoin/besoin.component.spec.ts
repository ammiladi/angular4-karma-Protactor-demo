import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BesoinComponent } from './besoin.component';
import { WorkflowService } from '../../services/workflow/workflow.service';

describe('BesoinComponent', () => {
  let component: BesoinComponent;
  let fixture: ComponentFixture<BesoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BesoinComponent ],
      providers: [
        { provide: WorkflowService, useClass: WorkflowService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
