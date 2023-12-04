import { Component, inject } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { BreakpointManagerService } from 'src/app/breakpoint-manager.service';
import { ThemeManager } from 'src/app/theme-manager.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  breakpointManager = inject(BreakpointManagerService);
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  public get buttonSize() {
    if (this.breakpointManager.currentBreakpoint === 'Small') {
      return 'small';
    } else {
      return 'big';
    }
  }

  public get decoreUrl$(): Observable<string> {
    let url = 'assets/images/decore';
    return this.themeManager.isDark$.pipe(
      take(1),
      map(isDark => {
        url += isDark ? '_dark.svg' : '_light.svg';
        return url;
      })
    );
  }
}
