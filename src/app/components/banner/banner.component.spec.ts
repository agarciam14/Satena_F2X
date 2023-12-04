import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';
import { BreakpointManagerService } from '@services/breakpoint-manager.service';
import { ThemeManager } from '@services/theme-manager.service';
import { of } from 'rxjs';
import { BreakpointSize, ComponentSize } from '@models';

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [
        { provide: BreakpointManagerService, useValue: {} },
        { provide: ThemeManager, useValue: { isDark$: of(false) } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set buttonSize to SMALL when breakpoint is SMALL', () => {
    spyOnProperty(
      component.breakpointManager,
      'currentBreakpoint',
      'get'
    ).and.returnValue(BreakpointSize.SMALL);
    expect(component.buttonSize).toEqual(ComponentSize.SMALL);
  });

  it('should set buttonSize to BIG when breakpoint is not SMALL', () => {
    spyOnProperty(
      component.breakpointManager,
      'currentBreakpoint',
      'get'
    ).and.returnValue(BreakpointSize.MEDIUM);
    expect(component.buttonSize).toEqual(ComponentSize.BIG);
  });

  it('should update decoreUrl$ based on isDark$ value', () => {
    spyOnProperty(component.themeManager, 'isDark$').and.returnValue(of(true));

    component.decoreUrl$.subscribe({
      next: (url: string) => {
        expect(url).toContain('_dark.svg');
      },
    });
  });
});
