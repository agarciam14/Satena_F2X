import { Component, Input, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ThemeManager } from 'src/app/theme-manager.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;

  @Input()
  size: 'big' | 'small' = 'big';

  public get type$(): Observable<string> {
    return this.isDark$.pipe(map(isDark => (isDark ? 'white' : 'full-color')));
  }
}
