import { StoryFn, Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'Components/Logo',
  component: LogoComponent,
  args: {},
} as Meta;

const Template: StoryFn<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const FullColorBig = Template.bind({});

export const FullColorSmall = Template.bind({
  size: 'small',
});

export const White = Template.bind({
  type: 'white',
});
