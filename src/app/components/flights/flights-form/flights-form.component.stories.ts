import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { FlightsFormComponent } from './flights-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ButtonModule } from '../../button/button.module';
import { MatNativeDateModule } from '@angular/material/core';

export default {
  component: FlightsFormComponent,
  args: {},
  decorators: [
    moduleMetadata({
      imports: [
        ReactiveFormsModule,
        ButtonModule,
        NgSelectModule,
        MatIconModule,
        MatRadioModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule,
      ],
    }),
  ],
} as Meta;

const Template: StoryFn<FlightsFormComponent> = (
  args: FlightsFormComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  passengers: [
    { viewValue: '1 persona', value: 1 },
    { viewValue: '2 personas', value: 2 },
    { viewValue: '3 personas', value: 3 },
    { viewValue: '4 personas', value: 4 },
    { viewValue: '5 personas', value: 5 },
  ],
  categories: [
    { viewValue: 'Económica', value: 'Económica' },
    { viewValue: 'Ejecutiva', value: 'Ejecutiva' },
    { viewValue: 'Primera Clase', value: 'Primera Clase' },
  ],
}
