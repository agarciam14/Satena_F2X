import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, ButtonModule],
  exports: [BannerComponent],
})
export class BannerModule {}
