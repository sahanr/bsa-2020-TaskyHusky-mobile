import { callWebApi } from '../helpers/callApi.helper';

export const logInRequest = async (email: string, password: string): Promise<WebApi.Result.UserAuthResult> => {
	const res: Response = await callWebApi({
		endpoint: 'auth/login',
		body: { email, password },
		method: 'POST',
	});

	return (await res.json()) as WebApi.Result.UserAuthResult;
};

export const getProfileRequest = async (): Promise<WebApi.Models.User> => {
	const res: Response = await callWebApi({
		endpoint: 'auth/profile',
		method: 'GET',
	});

	return (await res.json()) as WebApi.Models.User;
};
