import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectionComponent } from './protection.component';
import { WorkflowService } from '../../services/workflow/workflow.service';

describe('ProtectionComponent', () => {
  let component: ProtectionComponent;
  let fixture: ComponentFixture<ProtectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectionComponent ],
      providers: [
          { provide: WorkflowService, useClass: WorkflowService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
