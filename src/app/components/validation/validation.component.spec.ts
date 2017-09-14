import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationComponent } from './validation.component';
import { WorkflowService } from '../../services/workflow/workflow.service';

describe('ValidationComponent', () => {
  let component: ValidationComponent;
  let fixture: ComponentFixture<ValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationComponent ],
      providers: [
          { provide: WorkflowService, useClass: WorkflowService }],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
