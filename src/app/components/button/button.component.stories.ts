// import { StoryFn, Meta } from '@storybook/angular';
// import { ButtonComponent } from './button.component';
// import { ComponentTypes } from '@models';

// export default {
//   title: 'Components/Button',
//   component: ButtonComponent,
//   args: {
//     label: 'Button',
//   },
// } as Meta;

// const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
//   props: args,
// });

// export const Primary = Template.bind({});

// export const Secondary = Template.bind({
//   type: ComponentTypes.SECONDARY,
// });

import { Meta, StoryFn } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ComponentSize, ComponentTypes } from '@models';

// Mock data
const label = 'Click me';

// Define component metadata
const meta: Meta = {
  title: 'Button Component',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
    }),
  ],
};

export default meta;

// Define individual stories
const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  component: ButtonComponent,
  props: args,
});

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  label,
  type: ComponentTypes.PRIMARY,
  size: ComponentSize.BIG,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label,
  type: ComponentTypes.PRIMARY,
  size: ComponentSize.SMALL,
};

export const Secondary = Template.bind({});
Secondary.args = {
  label,
  type: ComponentTypes.SECONDARY,
};
