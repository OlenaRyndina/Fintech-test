import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarBlockComponent } from './blocks/sidebar-block/sidebar-block.component';
import { MenuComponent } from './ui/menu/menu.component';



@NgModule({
  declarations: [
    SidebarBlockComponent,
    MenuComponent
  ],
  exports: [
      SidebarBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SidebarBlockModule { }
