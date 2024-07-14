export interface IUser {
	id: number;
	active: boolean;
	password: string;
	name: string;
	phone: string | undefined;
	email: string;
	created_at: string;
	updated_at: string;
	permissions: string[];
}
