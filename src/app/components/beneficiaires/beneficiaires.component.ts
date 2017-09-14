import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow/workflow.service';
import { STEPS } from '../../services/workflow/workflow.model';
@Component({
  selector: 'app-beneficiaires',
  templateUrl: './beneficiaires.component.html',
  styleUrls: ['./beneficiaires.component.css']
})
export class BeneficiairesComponent implements OnInit {
  title = 'Vos beneficiaires.';
  constructor(private workflowService: WorkflowService) {

  }

  ngOnInit() {

    this.workflowService.validateStep(STEPS.beneficiaires);

  }

}
