import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  USER_DATA_FEATURE_NAME, UserDataState } from './user.reducer';

const getFeature = createFeatureSelector<UserDataState>(USER_DATA_FEATURE_NAME);

export const getLoading = createSelector(
    getFeature,
    state => state.loading
);

export const getLoaded = createSelector(
    getFeature,
    state => state.loaded
);

export const getServerError = createSelector(
    getFeature,
    state => state.serverError
);

export const getUserData = createSelector(
    getFeature,
    state => state.data
);
