declare namespace WebApi.Result {
	interface UserAuthResult {
		user: WebApi.Models.User;
		jwtToken: string;
	}
}

declare namespace WebApi.Models {
	interface User {
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
}
