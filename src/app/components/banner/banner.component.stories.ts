import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { BannerComponent } from './banner.component';
import { BreakpointManagerService } from '@services/breakpoint-manager.service';
import { ThemeManager } from '@services/theme-manager.service';
import { BreakpointSize } from '@models';
import { of } from 'rxjs';
import { ButtonModule } from '../button/button.module';

// Mock services
const breakpointManagerMock = {
  currentBreakpoint: BreakpointSize.SMALL,
};

const themeManagerMock = {
  isDark$: of(false),
};

export default {
  component: BannerComponent,
  decorators: [
    moduleMetadata({
      declarations: [BannerComponent],
      imports: [ButtonModule],
      providers: [
        { provide: BreakpointManagerService, useValue: breakpointManagerMock },
        { provide: ThemeManager, useValue: themeManagerMock },
      ],
    }),
  ],
} as Meta;

const Template: StoryFn<BannerComponent> = (args: BannerComponent) => ({
  component: BannerComponent,
  props: args,
});

export const SmallSize = Template.bind({});
SmallSize.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.SMALL,
  } as BreakpointManagerService,
};

export const MediumSize = Template.bind({});
MediumSize.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.MEDIUM,
  } as BreakpointManagerService,
};

export const DarkTheme = Template.bind({});
DarkTheme.args = {
  themeManager: {
    isDark$: of(true),
  } as ThemeManager,
};

export const CustomButtonSize = Template.bind({});
CustomButtonSize.args = {
  breakpointManager: {
    currentBreakpoint: BreakpointSize.SMALL,
  } as BreakpointManagerService,
};
