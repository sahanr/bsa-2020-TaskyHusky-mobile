export interface User {
	id: string;
	firstName?: string;
	lastName?: string;
	avatar?: string;
	department?: string;
	timezone?: string;
	organization?: string;
	email: string;
	jobTitle?: string;
	userSettingsId?: string;
	password?: string;
}

export interface AuthState {
	user: User | null;
	isAuthorized: boolean;
	profileLoaded: boolean;
}

export const initialState: AuthState = {
	user: null,
	isAuthorized: false,
	profileLoaded: true,
};
