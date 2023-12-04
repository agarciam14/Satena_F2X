import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { HeaderModule } from './header/header.module';
import { BannerModule } from './banner/banner.module';
import { ThemeModule } from './theme/theme.module';
import { LogoModule } from './logo/logo.module';
import { FooterModule } from './footer/footer.module';
import { FlightsModule } from './flights/flights.module';
import { DestinationsModule } from './destinations/destinations.module';
import { TestimonialsModule } from './testimonials/testimonials.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    HeaderModule,
    BannerModule,
    ThemeModule,
    LogoModule,
    FooterModule,
    FlightsModule,
    DestinationsModule,
    TestimonialsModule,
  ],
  exports: [
    ButtonModule,
    HeaderModule,
    BannerModule,
    ThemeModule,
    LogoModule,
    FooterModule,
    FlightsModule,
    DestinationsModule,
    TestimonialsModule,
  ],
})
export class ComponentsModule {}
