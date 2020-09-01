import { User } from '../containers/LoginPage/logic/state';

declare namespace WebApi.Result {
	interface UserAuthResult {
		user: User;
		jwtToken: string;
	}
}
