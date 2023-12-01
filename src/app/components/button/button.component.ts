import { Component, Input } from '@angular/core';

const getStyles = (...args: string[]) => ['button', ...args].filter(Boolean);

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  label = '';

  @Input()
  type: 'primary' | 'secondary' = 'primary';

  @Input()
  size: 'big' | 'small' = 'big';

  public get classes(): string[] {
    return getStyles(this.type, this.size);
  }
}
