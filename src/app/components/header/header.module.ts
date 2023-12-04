import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from '../button/button.module';
import { MatIconModule } from '@angular/material/icon';
import { ThemeModule } from '../theme/theme.module';
import { LogoModule } from '../logo/logo.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, ButtonModule, MatIconModule, ThemeModule, LogoModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
