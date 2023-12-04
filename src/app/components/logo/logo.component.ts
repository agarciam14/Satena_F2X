import { Component, Input, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ThemeManager } from '@services//theme-manager.service';
import { ComponentSize, ComponentTypes } from '@models';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  themeManager = inject(ThemeManager);
  isDark$ = this.themeManager.isDark$;
  componentSize = ComponentSize;
  componentTypes = ComponentTypes;

  @Input()
  size: ComponentSize = ComponentSize.BIG;

  public get type$(): Observable<
    ComponentTypes.FULL_COLOR | ComponentTypes.WHITE
  > {
    return this.isDark$.pipe(
      map(isDark => (isDark ? ComponentTypes.WHITE : ComponentTypes.FULL_COLOR))
    );
  }
}
