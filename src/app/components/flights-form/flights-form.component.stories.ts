import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { FlightsFormComponent } from './flights-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

export default {
  title: 'Components/FlightsForm',
  component: FlightsFormComponent,
  args: {},
  decorators: [
    moduleMetadata({
      imports: [
        MatDatepickerModule,
        NgSelectModule,
        MatIconModule,
        MatNativeDateModule,
        MatRadioModule,
      ],
    }),
  ],
} as Meta;

const Template: StoryFn<FlightsFormComponent> = (
  args: FlightsFormComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
