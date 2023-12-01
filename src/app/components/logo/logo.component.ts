import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input()
  type: 'full-color' | 'white' = 'full-color';

  @Input()
  size: 'big' | 'small' = 'big';
}
