import { StoryFn, Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';
import { ComponentSize } from '@models';

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
  size: ComponentSize.SMALL,
});
