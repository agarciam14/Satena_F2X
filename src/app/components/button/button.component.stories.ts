import { Meta, StoryFn } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ComponentSize, ComponentTypes } from '@models';

// Mock data
const label = 'Click me';

// Define component metadata
const meta: Meta = {
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
