import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { HeaderComponent } from './header.component';
import { BreakpointSize } from '@models';
import { BreakpointManagerService } from '@services/breakpoint-manager.service';

export default {
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      providers: [BreakpointManagerService],
    }),
  ],
} as Meta;

const Template: StoryFn<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args,
});

export const LargeBreakpoint = Template.bind({});
LargeBreakpoint.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.LARGE,
  } as BreakpointManagerService,
};

export const SmallBreakpoint = Template.bind({});
SmallBreakpoint.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.SMALL,
  } as BreakpointManagerService,
};

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  isMenuOpen: true,
};

export const CustomLogoSize = Template.bind({});
CustomLogoSize.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.LARGE,
  } as BreakpointManagerService,
};
