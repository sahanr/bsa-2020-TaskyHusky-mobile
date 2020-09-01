export const LOGIN = 'USER:AUTH:LOGIN';
export const LOGIN_SUCCESS = 'USER:AUTH:LOGIN:SUCCESS';
export const LOAD_PROFILE = 'USER:AUTH:PROFILE:LOAD';
export const LOAD_PROFILE_SUCCESS = 'USER:AUTH:PROFILE:LOAD:SUCCESS';

export type LogIn = {
	email: string;
	password: string;
};

export type LogInSuccess = {
	user: WebApi.Models.User | null;
};

export type LoadProfileSuccess = {
	user: WebApi.Models.User | null;
};
