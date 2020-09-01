import { User } from './state';

export const LOGIN = 'USER:AUTH:LOGIN';
export const LOGIN_SUCCESS = 'USER:AUTH:LOGIN:SUCCESS';

export type LogIn = {
	email: string;
	password: string;
};

export type LogInSuccess = {
	user: User;
};
