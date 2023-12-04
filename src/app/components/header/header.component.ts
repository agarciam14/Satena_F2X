import { Component } from '@angular/core';
import { BreakpointManagerService } from 'src/app/breakpoint-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuOpen = false;

  constructor(public breakpointManager: BreakpointManagerService) {}

  public get logoSize() {
    if (this.breakpointManager.currentBreakpoint === 'Large') {
      return 'big';
    } else {
      return 'small';
    }
  }

  public toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
