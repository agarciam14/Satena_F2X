import { StoryFn, Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';
import { ComponentSize } from '@models';
import { of } from 'rxjs';

export default {
  component: LogoComponent,
  args: {},
} as Meta;

const Template: StoryFn<LogoComponent> = (args: LogoComponent) => ({
  props: args,
});

export const FullColorBig = Template.bind({});
FullColorBig.args = {
  size: ComponentSize.BIG,
  isDark$: of(false),
};

export const FullColorSmall = Template.bind({});
FullColorSmall.args = {
  size: ComponentSize.SMALL,
  isDark$: of(false),
};

export const WhiteBig = Template.bind({});
WhiteBig.args = {
  size: ComponentSize.BIG,
  isDark$: of(true),
};
