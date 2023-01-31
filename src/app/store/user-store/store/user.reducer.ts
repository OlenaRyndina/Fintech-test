import { createReducer, on } from '@ngrx/store';

import { 
	  initUserData, 
	  initUserDataSuccess, 
	  initUserDataFailed,
	  } from './user.actions';

export const USER_DATA_FEATURE_NAME = 'user';

export interface UserDitails {
	login: string;
    id?: number;
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
    name: string;
    company: string;
    blog: string;
    location?: string;
    email?: string;
    hireable?: string;
    bio: string;
    twitter_username?: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: string;
    updated_at: string
}

export interface UserDataState {
	  loading: boolean;
	  loaded: boolean;
	  serverError: string;
	  data?: any;
}

const initialState: UserDataState = {
    loaded: false,
    loading: false,
    serverError: '',
    data: ''
};
 
export const UserReducer = createReducer(
	  initialState,
	  on(initUserData, state => state.loaded ? state : {
		    ...state,
		    loading: true
	  }),
	  on(initUserDataSuccess, (state, action) => ({
		    ...state,
	    	loading: false,
		    loaded: true,
		    serverError: '',
		    data: action.data
	  })),
    on(initUserDataFailed, (state, action) => ({
    	  ...state,
    	  loading: false,
    	  loaded: true,
    	  serverError: action.serverError,
    	  data: ''
    }))
);