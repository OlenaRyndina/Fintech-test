import { createReducer, on } from '@ngrx/store';

import { 
	  initUsersData, 
	  initUsersDataSuccess, 
	  initUsersDataFailed,
	  selectUserData,
	  selectUserDataSuccess,
	  extractSelectedUsersFromLocalSrorage,
	  extractSelectedUsers,
	  searchedUsersData
	  } from './users.actions';

export const USERS_DATA_FEATURE_NAME = 'users';

export interface User {
	login: string;
    id?: 1;
    isChecked?: boolean;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

export interface UsersDataState {
	  loading: boolean;
	  loaded: boolean;
	  serverError: string;
	  data?: any;
	  selectedData?: any;
	  searchedData?: any;
}

const initialState: UsersDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: [],
    selectedData: [],
    searchedData:[]
};
 
export const UsersReducer = createReducer(
	initialState,
	on(initUsersData, state => state.loaded ? state : {
		...state,
		loading: true
	  }),
	on(initUsersDataSuccess, (state, action) => ({
		...state,
	    loading: false,
		loaded: true,
		serverError: '',
		data: action.data
	  })),
    on(initUsersDataFailed, (state, action) => ({
    	...state,
    	loading: false,
    	loaded: true,
    	serverError: action.serverError,
    	data: []
    })),
    on(selectUserData, state => state.loaded ? state : {
		...state,
		loading: true
	  }),
    on(selectUserDataSuccess, (state, action) => ({
		...state,
	    loading: false,
		loaded: true,
		serverError: '',
		selectedData: action.data
	})),
	on(extractSelectedUsersFromLocalSrorage, (state, {type, ...data}) => ({
		...state,
	    loading: false,
		loaded: true,
		serverError: '',
		selectedData: Object.values(data)
	})),
	on(extractSelectedUsers, (state) => ({
		...state,
		loading: false,
		loaded: true,
		serverError: ''
	})),
	on(searchedUsersData, (state, {type, ...data}) => ({
		...state,
        searchedData: data
	}))
);

