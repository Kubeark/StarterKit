export interface IAuth {
	access_token: string;
	refresh_token: string;
}

export interface IdPLogin {
	data: {
		authorization_url: string;
		state: string;
	};
}
