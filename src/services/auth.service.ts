import { callWebApi } from '../helpers/callApi.helper';
import { WebApi } from '../typings/webapi';

export const logInRequest = async (email: string, password: string): Promise<WebApi.Result.UserAuthResult> => {
	const res: Response = await callWebApi({
		endpoint: 'auth/login',
		body: { email, password },
		method: 'POST',
	});

	return (await res.json()) as WebApi.Result.UserAuthResult;
};
