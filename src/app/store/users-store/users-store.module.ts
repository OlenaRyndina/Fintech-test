import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { UsersReducer, USERS_DATA_FEATURE_NAME } from './store/users.reducer';
import { UsersEffects } from './store/users.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(USERS_DATA_FEATURE_NAME, UsersReducer),
    EffectsModule.forFeature([UsersEffects])
  ]
})

export class UsersStoreModule { }

