import { StoryFn, Meta, moduleMetadata } from '@storybook/angular';
import { DestinationCardComponent } from './destination-card.component';
import { Destination } from '@models';
import { MatIconModule } from '@angular/material/icon';

export default {
  component: DestinationCardComponent,
} as Meta;

const Template: StoryFn<DestinationCardComponent> = (
  args: DestinationCardComponent
) => ({
  component: DestinationCardComponent,
  props: args,
  decorators: [
    moduleMetadata({
      declarations: [DestinationCardComponent],
      imports: [MatIconModule],
    }),
  ],
});

export const Default = Template.bind({});
Default.args = {
  destination: {
    imgSrc: 'assets/images/destinations/la-macarena.jpg',
    name: 'La macarena',
    formattedPrice: '$130.000',
    initialDate: '5 nov',
    finalDate: '13 dic',
  } as Destination,
};
