import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeComponent } from './components/theme/theme.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { DestinationCardComponent } from './components/destination-card/destination-card.component';
import { FlightsComponent } from './components/flights/flights.component';
import { FlightsFormComponent } from './components/flights-form/flights-form.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    HeaderComponent,
    BannerComponent,
    TestimonialsComponent,
    TestimonialCardComponent,
    DestinationsComponent,
    DestinationCardComponent,
    FlightsComponent,
    FlightsFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
