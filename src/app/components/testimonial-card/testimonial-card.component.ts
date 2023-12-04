import { Component, Input } from '@angular/core';
import { ComponentSize, ComponentTypes, Testimonial } from '@models';

const getStyles = (...args: string[]) =>
  ['testimonial-card', ...args].filter(Boolean);

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.scss'],
})
export class TestimonialCardComponent {
  @Input()
  type: ComponentTypes.PRIMARY | ComponentTypes.SECONDARY =
    ComponentTypes.PRIMARY;

  @Input()
  size: ComponentSize = ComponentSize.SMALL;

  @Input({ required: true })
  testimonial!: Testimonial;

  public get classes(): string[] {
    return getStyles(this.type, this.size);
  }
}
