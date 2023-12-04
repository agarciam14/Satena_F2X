import { Component } from '@angular/core';
import { BreakpointManagerService } from 'src/app/breakpoint-manager.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(public breakpointManager: BreakpointManagerService) {}

  public get logoSize() {
    if (this.breakpointManager.currentBreakpoint === 'Small') {
      return 'small';
    } else {
      return 'big';
    }
  }
}
