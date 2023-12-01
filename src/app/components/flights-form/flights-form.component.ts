import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['./flights-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlightsFormComponent {
  flightForm: FormGroup;
  passengers = [
    { viewValue: '1 persona', value: 1 },
    { viewValue: '2 personas', value: 2 },
    { viewValue: '3 personas', value: 3 },
    { viewValue: '4 personas', value: 4 },
    { viewValue: '5 personas', value: 5 },
  ];

  categories = [
    { viewValue: 'Económica', value: 'Económica' },
    { viewValue: 'Ejecutiva', value: 'Ejecutiva' },
    { viewValue: 'Primera Clase', value: 'Primera Clase' },
  ];

  constructor(private fb: FormBuilder) {
    this.flightForm = this.fb.group({
      type: '',
      from: '',
      to: '',
      departureDate: '',
      returnDate: '',
      passengersNumber: [],
      category: [],
    });
  }
}
