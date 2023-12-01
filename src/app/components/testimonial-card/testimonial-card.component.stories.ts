import { StoryFn, Meta } from '@storybook/angular';
import { TestimonialCardComponent } from './testimonial-card.component';

export default {
  title: 'Components/Testimonials/Card',
  component: TestimonialCardComponent,
  args: {
    testimonial: {
      userName: 'Erick Padilla',
      profilePicture: 'assets/images/erick',
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
