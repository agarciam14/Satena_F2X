import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointManagerService {
  readonly breakpoint$ = this.breakpointObserver
    .observe([
      '(max-width: 833.8px)',
      '(min-width: 834px) and (max-width: 1023.8px)',
      '(min-width: 1024px)',
    ])
    .pipe(distinctUntilChanged());

  breakpoints = Breakpoints;
  currentBreakpoint = '';

  constructor(public breakpointObserver: BreakpointObserver) {
    this.breakpoint$.subscribe(() => this.breakpointChanged());
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched('(max-width: 833.8px)')) {
      this.currentBreakpoint = 'Small';
    } else if (
      this.breakpointObserver.isMatched(
        '(min-width: 834px) and (max-width: 1023.8px)'
      )
    ) {
      this.currentBreakpoint = 'Medium';
    } else if (this.breakpointObserver.isMatched('(min-width: 1024px)')) {
      this.currentBreakpoint = 'Large';
    }
  }
}
