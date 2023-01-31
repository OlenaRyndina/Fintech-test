import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType  } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { withLatestFrom, filter, switchMap, map, catchError, tap } from 'rxjs/operators';

import { UsersService } from '../services/users.service';
import { getLoaded, getLoading } from './users.selectors';
import { 
    initUsersData, 
    initUsersDataSuccess, 
    initUsersDataFailed,
    selectUserData,
    selectUserDataSuccess,
    extractSelectedUsers,
    extractSelectedUsersFailed,
    extractSelectedUsersFromLocalSrorage } from './users.actions';

@Injectable()
export class UsersEffects {

    constructor(
        private actions$: Actions,
        private usersService: UsersService,
        private store$: Store
    ){}
     
    saveUsersData$ = createEffect(() => this.actions$.pipe(
        ofType(initUsersData),
        withLatestFrom(
            this.store$.pipe(select(getLoaded)),
            this.store$.pipe(select(getLoading)),
        ),
        filter(([_, loaded, loading]) => !loaded && loading),
        switchMap(() => this.usersService.getUsers().pipe(
            map(data => initUsersDataSuccess({data})),
            catchError(error => of(
                initUsersDataFailed({serverError: error.serverError})
            ))
        ))
    ));
    
    saveSelectedUserDataToLocalStorage$ = createEffect(() => this.actions$.pipe(
        ofType(selectUserDataSuccess),
        tap( ( usersData ) => {
            let payload = [...usersData.data];
            localStorage.setItem('selectedUser', JSON.stringify(payload));
        } )
    ), { dispatch: false } );

    extractSelectedUsers$ = createEffect(() => this.actions$.pipe(
        ofType(extractSelectedUsers),
        map(() => {

            const selectedUsersString = localStorage.getItem('selectedUser');                         
            const selectedData = JSON.parse(selectedUsersString);

            return extractSelectedUsersFromLocalSrorage(selectedData);
        }),
        catchError(error => of(
            extractSelectedUsersFailed({serverError: error.serverError})
        ))
    )); 
}
