import { Component, inject } from '@angular/core';
import { Observable, map, take } from 'rxjs';
import { BreakpointManagerService } from '@services//breakpoint-manager.service';
import { ThemeManager } from '@services//theme-manager.service';
import { BreakpointSize, ComponentSize } from '@models';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  breakpointManager = inject(BreakpointManagerService);
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  public get buttonSize(): ComponentSize {
    if (this.breakpointManager.currentBreakpoint === BreakpointSize.SMALL) {
      return ComponentSize.SMALL;
    } else {
      return ComponentSize.BIG;
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
