import { WorkflowService } from './services/workflow/workflow.service';
import { SituationComponent } from './components/situation/situation.component';
import { BesoinComponent } from './components/besoin/besoin.component';
import { ProtectionComponent } from './components/protection/protection.component';
import { BeneficiairesComponent } from './components/beneficiaires/beneficiaires.component';
import { ValidationComponent } from './components/validation/validation.component';


export const appStates = [
    // 1st State
    { name: 'situation', url: '/situation',  component: SituationComponent },
    // 2nd State:
    { name: 'besoin', url: '/besoin',  component: BesoinComponent, onEnter: verifyWorkFlow },
    // 3rd State
    { name: 'protection', url: '/protection',  component: ProtectionComponent, onEnter: verifyWorkFlow },
    // 4th State
    { name: 'beneficiaires', url: '/beneficiaires',  component: BeneficiairesComponent, onEnter: verifyWorkFlow },
    // 5th State
    { name: 'validation', url: '/validation',  component: ValidationComponent, onEnter: verifyWorkFlow }
];

export function verifyWorkFlow(transition, state) {
    console.log('Entered ' + state.name + ' state.');

    const $stateService = transition.router.stateService;
    const workflowService = transition.injector().get(WorkflowService);
    // If any of the previous steps is invalid, go back to the first invalid step
    const firstState = workflowService.getFirstInvalidStep(state.name);
    if (firstState.length > 0) {
        console.log('Redirected to ' + firstState + ' state which it is the first invalid step.');
        return $stateService.target(firstState);
    }
}
