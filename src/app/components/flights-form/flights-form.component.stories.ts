import { StoryFn, Meta } from '@storybook/angular';
import { FlightsFormComponent } from './flights-form.component';

export default {
  title: 'Components/FlightsForm',
  component: FlightsFormComponent,
  args: {},
} as Meta;

const Template: StoryFn<FlightsFormComponent> = (
  args: FlightsFormComponent
) => ({
  props: args,
});

export const Primary = Template.bind({});
