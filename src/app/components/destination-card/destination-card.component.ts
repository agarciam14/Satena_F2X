import { Component, Input } from '@angular/core';
import { Destination } from '@models';

@Component({
  selector: 'app-destination-card',
  templateUrl: './destination-card.component.html',
  styleUrls: ['./destination-card.component.scss'],
})
export class DestinationCardComponent {
  @Input({ required: true }) destination!: Destination;
}
