import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow/workflow.service';
import { STEPS } from '../../services/workflow/workflow.model';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  title = 'Validation.';
  constructor(private workflowService: WorkflowService) {

  }

  ngOnInit() {

    this.workflowService.validateStep(STEPS.validation);

  }
}
