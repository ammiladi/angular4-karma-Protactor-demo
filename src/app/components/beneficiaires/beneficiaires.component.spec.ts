import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiairesComponent } from './beneficiaires.component';
import { WorkflowService } from '../../services/workflow/workflow.service';

describe('BeneficiairesComponent', () => {
  let component: BeneficiairesComponent;
  let fixture: ComponentFixture<BeneficiairesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiairesComponent ],
      providers: [
          { provide: WorkflowService, useClass: WorkflowService }],
      })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
