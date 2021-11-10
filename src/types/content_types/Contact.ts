export interface ContactData {
	phoneNumber: string;
	email: string;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
}
