import { Component, inject } from '@angular/core';
import { BreakpointManagerService } from 'src/app/breakpoint-manager.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  breakpointManager = inject(BreakpointManagerService);
  isMenuOpen = false;

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
