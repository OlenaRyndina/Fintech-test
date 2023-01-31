import { createAction, props } from '@ngrx/store';

import { User } from './users.reducer';

export const initUsersData = createAction(
    '[Users] init'
);

export const initUsersDataSuccess = createAction(
    '[Users] init success',
    props<{data: User[]}>()
);

export const initUsersDataFailed = createAction(
    '[Users] init failed',
    props<{serverError: string}>()
);

export const selectUserData = createAction(
    '[Users] select user',
    props<{data: any}>()
)

export const selectUserDataSuccess = createAction(
    '[Users] select user success',
    props<{data: User[]}>()
)

export const extractSelectedUsers = createAction(
    '[Users] extract Selected Users'
);

export const extractSelectedUsersFailed = createAction(
    '[Users] extract Selected Users failed',
    props<{serverError: string}>()
);

export const extractSelectedUsersFromLocalSrorage = createAction(
    '[Users] extract selected users from LocalStorage',
    props<{selectedData: User[]}>()
)

export const searchedUsersData = createAction(
    '[Users] search users data',
    props<{searchedData: any}>()
)