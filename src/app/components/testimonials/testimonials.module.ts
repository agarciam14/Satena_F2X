import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TestimonialsComponent, TestimonialCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [TestimonialsComponent],
})
export class TestimonialsModule {}
