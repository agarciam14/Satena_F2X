import { Component, Input } from '@angular/core';
import { ComponentSize, ComponentTypes } from '@models';

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
  type: ComponentTypes.PRIMARY | ComponentTypes.SECONDARY =
    ComponentTypes.PRIMARY;

  @Input()
  size: ComponentSize = ComponentSize.BIG;

  public get classes(): string[] {
    return getStyles(this.type, this.size);
  }
}
