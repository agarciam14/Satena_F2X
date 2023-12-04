import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationsComponent } from './destinations.component';
import { DestinationCardComponent } from './destination-card/destination-card.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DestinationsComponent, DestinationCardComponent],
  imports: [CommonModule, MatIconModule],
  exports: [DestinationsComponent],
})
export class DestinationsModule {}
