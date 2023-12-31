import { Component, ViewEncapsulation, inject } from '@angular/core';
import {
  BreakpointSize,
  ComponentSize,
  ComponentTypes,
  Testimonial,
} from '@models';
import { BreakpointManagerService } from '@services//breakpoint-manager.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TestimonialsComponent {
  breakpointManager = inject(BreakpointManagerService);
  componentTypes = ComponentTypes;
  activeIndex = 0;
  testimonials: Testimonial[] = [
    {
      userName: 'Erick Padilla',
      profilePicture: 'assets/images/users/erick.png',
      commentary:
        'Necesitaba cambiar las fechas de mi viaje, me comuniqué con Satena y fue fácil y rápido hacerlo. El mejor servicio al cliente que he usado',
      origin: 'Medellín',
      destination: 'Caracas',
    },
    {
      userName: 'Andrés Guzmán',
      profilePicture: 'assets/images/users/andres.png',
      commentary:
        'Fue un vuelo muy puntual, sin ningún problema al momento de comprar. Recomiendo completamente usar Satena para viajar',
      origin: 'Bogotá',
      destination: 'Nuquí',
    },
  ];

  public get cardSize(): ComponentSize {
    if (this.breakpointManager.currentBreakpoint === BreakpointSize.SMALL) {
      return ComponentSize.SMALL;
    } else {
      return ComponentSize.BIG;
    }
  }

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
