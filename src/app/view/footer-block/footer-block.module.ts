import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterBlockComponent } from './blocks/footer-block/footer-block.component';

@NgModule({
  declarations: [
    FooterBlockComponent
  ],
  exports: [
      FooterBlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterBlockModule { }
