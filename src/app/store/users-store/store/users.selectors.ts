import {  createFeatureSelector, createSelector } from '@ngrx/store';

import {  USERS_DATA_FEATURE_NAME, UsersDataState } from './users.reducer';

const getFeature = createFeatureSelector<UsersDataState>(USERS_DATA_FEATURE_NAME);

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

export const getUsersData = createSelector(
    getFeature,
    state => state.data
);

export const getSelectedUsersData = createSelector(
    getFeature,
    state => state.selectedData
)

export const getSearchedUsersData = createSelector(
    getFeature,
    state => state.searchedData
)