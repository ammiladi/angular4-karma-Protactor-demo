import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SituationComponent } from './situation.component';
import { WorkflowService } from '../../services/workflow/workflow.service';

describe('SituationComponent', () => {
  let component: SituationComponent;
  let fixture: ComponentFixture<SituationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SituationComponent ],
      providers: [
          { provide: WorkflowService, useClass: WorkflowService }],
        imports: [
          BrowserModule,
          FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SituationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
