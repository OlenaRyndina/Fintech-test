import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { getLoaded, getLoading } from './user.selectors';
import { 
    initUserData, 
    initUserDataSuccess, 
    initUserDataFailed } from './user.actions';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService,
        private store$: Store
    ){}
     
    saveUserDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(initUserData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap((data) => this.userService.getUser({...data[0]}).pipe(
            map(data => initUserDataSuccess({data})),
            catchError(error => of(
                initUserDataFailed({serverError: error.serverError})
            ))
        ))
    ));
}
