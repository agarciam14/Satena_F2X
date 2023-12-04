import { Component } from '@angular/core';
import { Destination } from '@models';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.scss'],
})
export class DestinationsComponent {
  destinations: Destination[] = [
    {
      imgSrc: 'assets/images/destinations/la-macarena.jpg',
      name: 'La macarena',
      formattedPrice: '$130.000',
      initialDate: '5 nov',
      finalDate: '13 dic',
    },
    {
      imgSrc: 'assets/images/destinations/nuqui.jpg',
      name: 'Nuquí',
      formattedPrice: '$197.000',
      initialDate: '5 nov',
      finalDate: '13 dic',
    },
    {
      imgSrc: 'assets/images/destinations/quibdo.jpg',
      name: 'Quibdó',
      formattedPrice: '$184.900',
      initialDate: '5 nov',
      finalDate: '13 dic',
    },
  ];
}
