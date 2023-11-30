import { Component } from '@angular/core';
import { Testimonial } from 'src/models';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      userName: 'Erick Padilla',
      profilePicture: '/assets/images/erick',
      commentary:
        'Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado',
      origin: 'Medellín',
      destination: 'Caracas',
    },
    {
      userName: 'Andrés Guzmán',
      profilePicture: '/assets/images/andres',
      commentary:
        'Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado',
      origin: 'Bogotá',
      destination: 'Nuquí',
    },
  ];
}
