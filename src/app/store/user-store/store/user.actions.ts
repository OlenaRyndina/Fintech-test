import { createAction, props } from '@ngrx/store';

import { UserDitails } from './user.reducer';

export const initUserData = createAction(
    '[User] init',
    props<{data: string}>()
);

export const initUserDataSuccess = createAction(
    '[User] init success',
    props<{data: UserDitails}>()
);

export const initUserDataFailed = createAction(
    '[User] init failed',
    props<{serverError: string}>()
);
