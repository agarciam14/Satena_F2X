import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './theme.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ThemeComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ThemeComponent],
})
export class ThemeModule {}
