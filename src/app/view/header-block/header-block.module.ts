import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { HeaderBlockComponent } from './blocks/header-block/header-block.component';
import { SearchInputComponent } from '../ui/search-input/search-input.component';


@NgModule({
  declarations: [
    HeaderBlockComponent,
    SearchInputComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
        HeaderBlockComponent
  ]
})
export class HeaderBlockModule { }
