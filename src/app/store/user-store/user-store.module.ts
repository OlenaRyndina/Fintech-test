import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { UserReducer, USER_DATA_FEATURE_NAME } from './store/user.reducer';
import { UserEffects } from './store/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(USER_DATA_FEATURE_NAME, UserReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserStoreModule { }
