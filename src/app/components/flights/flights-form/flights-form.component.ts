import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointSize, ComponentSize } from '@models';
import { BreakpointManagerService } from '@services//breakpoint-manager.service';

@Component({
  selector: 'app-flights-form',
  templateUrl: './flights-form.component.html',
  styleUrls: ['./flights-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FlightsFormComponent implements OnInit {
  fb = inject(FormBuilder);
  breakpointManager = inject(BreakpointManagerService);
  flightForm!: FormGroup;
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

  ngOnInit() {
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

  public get buttonSize(): ComponentSize {
    if (this.breakpointManager.currentBreakpoint === BreakpointSize.SMALL) {
      return ComponentSize.SMALL;
    } else {
      return ComponentSize.BIG;
    }
  }

  public clearInput(formControlName: string): void {
    this.flightForm.get(formControlName)?.setValue('');
  }
}
