import { StoryFn, Meta } from '@storybook/angular';
import { TestimonialCardComponent } from './testimonial-card.component';
import { ComponentTypes, ComponentSize } from '@models';

export default {
  component: TestimonialCardComponent,
  args: {
    testimonial: {
      userName: 'Erick Padilla',
      profilePicture: 'assets/images/users/erick.png',
      commentary:
        'Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado',
      origin: 'Medellín',
      destination: 'Caracas',
    },
  },
} as Meta;

const Template: StoryFn<TestimonialCardComponent> = (
  args: TestimonialCardComponent
) => ({
  props: args,
});

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  type: ComponentTypes.PRIMARY,
  size: ComponentSize.SMALL,
};

export const PrimaryBig = Template.bind({});
PrimaryBig.args = {
  type: ComponentTypes.PRIMARY,
  size: ComponentSize.BIG,
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  type: ComponentTypes.SECONDARY,
  size: ComponentSize.SMALL,
};

export const SecondaryBig = Template.bind({});
SecondaryBig.args = {
  type: ComponentTypes.SECONDARY,
  size: ComponentSize.BIG,
};
