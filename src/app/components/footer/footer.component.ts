import { Component, inject } from '@angular/core';
import { BreakpointSize, ComponentSize } from '@models';
import { BreakpointManagerService } from '@services//breakpoint-manager.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  breakpointManager = inject(BreakpointManagerService);

  public get logoSize(): ComponentSize {
    if (this.breakpointManager.currentBreakpoint === BreakpointSize.SMALL) {
      return ComponentSize.SMALL;
    } else {
      return ComponentSize.BIG;
    }
  }
}
