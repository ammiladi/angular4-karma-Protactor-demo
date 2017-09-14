import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';
import { FormsModule } from '@angular/forms';
import { UIRouterConfigFn } from '../../app.router';
import { appStates } from '../../app.states';

import { DigitalTunelComponent } from './digital-tunel.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { SituationComponent } from '../../components/situation/situation.component';
import { BesoinComponent } from '../../components/besoin/besoin.component';
import { ProtectionComponent } from '../../components/protection/protection.component';
import { BeneficiairesComponent } from '../../components/beneficiaires/beneficiaires.component';
import { ValidationComponent } from '../../components/validation/validation.component';

describe('DigitalTunelComponent', () => {
  let component: DigitalTunelComponent;
  let fixture: ComponentFixture<DigitalTunelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DigitalTunelComponent,
        NavbarComponent,
        SituationComponent,
        BesoinComponent,
        ProtectionComponent,
        BeneficiairesComponent,
        ValidationComponent],

        imports: [
          BrowserModule,
          FormsModule,
          UIRouterModule.forRoot({
            states: appStates,
            useHash: true,
            config: UIRouterConfigFn
          })
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalTunelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
