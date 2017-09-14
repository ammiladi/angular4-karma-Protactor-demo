import { Component, OnInit } from '@angular/core';
import { Personal } from '../../model/formData.model';
import { FormDataService } from '../../model/formData.service';

@Component({
  selector: 'app-situation',
  templateUrl: './situation.component.html',
  styleUrls: ['./situation.component.css'],
  providers: [FormDataService]
})
export class SituationComponent implements OnInit {

  title = 'Veuillez saisir vos informations personnelles.';
  personal: Personal;
  form: any;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
  }

  save(form: any) {
    if (!form.valid) {
      return;
    }

   this.formDataService.setPersonal(this.personal);
  }

}
