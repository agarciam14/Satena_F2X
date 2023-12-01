import { Component, ViewEncapsulation } from '@angular/core';
import { Testimonial } from 'src/models';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent {
  activeIndex = 0;
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
        'Fue un vuelo muy puntual, sin ningún problema al momento de comprar. Recomiendo completamente usar Satena para viajar',
      origin: 'Bogotá',
      destination: 'Nuquí',
    },
  ];

  public get nextIndex() {
    return (this.activeIndex + 1) % this.testimonials.length;
  }

  public next() {
    this.activeIndex = this.nextIndex;
  }

  public prev() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.testimonials.length - 1;
    } else {
      this.activeIndex -= 1;
    }
  }
}
