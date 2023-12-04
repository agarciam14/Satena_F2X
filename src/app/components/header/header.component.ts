import { Component, inject } from '@angular/core';
import { BreakpointSize, ComponentSize, ComponentTypes } from '@models';
import { BreakpointManagerService } from '@services//breakpoint-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  breakpointManager = inject(BreakpointManagerService);
  componentTypes = ComponentTypes;
  isMenuOpen = false;

  public get logoSize(): ComponentSize {
    if (this.breakpointManager.currentBreakpoint === BreakpointSize.LARGE) {
      return ComponentSize.BIG;
    } else {
      return ComponentSize.SMALL;
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
