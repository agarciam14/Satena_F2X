import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsFormComponent } from './flights-form/flights-form.component';
import { ButtonModule } from '../button/button.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  declarations: [FlightsComponent, FlightsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    NgSelectModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDatepickerModule,
  ],
  exports: [FlightsComponent],
})
export class FlightsModule {}
