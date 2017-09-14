import { Component } from '@angular/core';

import { DigitalHeaderComponent } from './../digital-header/digital-header.component';
import { DigitalFooterComponent } from './../digital-footer/digital-footer.component';
import { DigitalTunelComponent } from './../digital-tunel/digital-tunel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digital Protection App';
}
