import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';

// App root and feature component
import { AppComponent } from './components/app-root/app.component';
import { DigitalHeaderComponent } from './components/digital-header/digital-header.component';
import { DigitalFooterComponent } from './components/digital-footer/digital-footer.component';
import { DigitalTunelComponent } from './components/digital-tunel/digital-tunel.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SituationComponent } from './components/situation/situation.component';
import { BesoinComponent } from './components/besoin/besoin.component';
import { ProtectionComponent } from './components/protection/protection.component';
import { BeneficiairesComponent } from './components/beneficiaires/beneficiaires.component';
import { ValidationComponent } from './components/validation/validation.component';

// App Router
import { UIRouterConfigFn } from './app.router';
import { appStates } from './app.states';

/* Shared Service */
// import { FormDataService }    from './data/formData.service';
import { WorkflowService } from './services/workflow/workflow.service';

@NgModule({
  declarations: [
    AppComponent,
    DigitalHeaderComponent,
    DigitalFooterComponent,
    DigitalTunelComponent,
    NavbarComponent,
    SituationComponent,
    BesoinComponent,
    ProtectionComponent,
    BeneficiairesComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
  providers: [
    // { provide: FormDataService, useClass: FormDataService },
                  { provide: WorkflowService, useClass: WorkflowService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
