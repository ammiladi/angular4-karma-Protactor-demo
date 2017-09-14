import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow/workflow.service';
import { STEPS } from '../../services/workflow/workflow.model';
@Component({
  selector: 'app-protection',
  templateUrl: './protection.component.html',
  styleUrls: ['./protection.component.css']
})
export class ProtectionComponent implements OnInit {
  title = 'Votre protection.';
  constructor(private workflowService: WorkflowService) {

  }

  ngOnInit() {

    this.workflowService.validateStep(STEPS.protection);

  }

}
