import { Component, OnInit } from '@angular/core';
import { WorkflowService } from '../../services/workflow/workflow.service';
import { STEPS } from '../../services/workflow/workflow.model';
@Component({
  selector: 'app-besoin',
  templateUrl: './besoin.component.html',
  styleUrls: ['./besoin.component.css']
})
export class BesoinComponent implements OnInit {

  title = 'Votre Besoin.';
  constructor(private workflowService: WorkflowService) {

  }

  ngOnInit() {

    this.workflowService.validateStep(STEPS.besoin);

  }

}
