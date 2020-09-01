export interface AuthState {
	user: WebApi.Models.User | null;
	isAuthorized: boolean;
	profileLoaded: boolean;
}

export const initialState: AuthState = {
	user: null,
	isAuthorized: false,
	profileLoaded: false,
};
