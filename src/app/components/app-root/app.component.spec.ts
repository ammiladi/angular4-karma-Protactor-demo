import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DigitalHeaderComponent } from './../digital-header/digital-header.component';
import { DigitalFooterComponent } from './../digital-footer/digital-footer.component';
import { DigitalTunelComponent } from './../digital-tunel/digital-tunel.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { SituationComponent } from './../situation/situation.component';
import { BesoinComponent } from './../besoin/besoin.component';
import { ProtectionComponent } from './../protection/protection.component';
import { BeneficiairesComponent } from './../beneficiaires/beneficiaires.component';
import { ValidationComponent } from './../validation/validation.component';
import { UIRouterConfigFn } from './../../app.router';
import { appStates } from './../../app.states';
import { WorkflowService } from './../../services/workflow/workflow.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
}));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Digital Protection App');
  }));

  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));*/
});
