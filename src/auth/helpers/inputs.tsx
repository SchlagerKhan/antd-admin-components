export const INPUTS = [
	{
		id: 'email',
		placeholder: 'Email',
		opts: {
			rules: [{ required: true, message: 'Email is required' }],
		},
	},
	{
		id: 'password',
		placeholder: 'Lösenord',
		type: 'password',
		opts: {
			rules: [{ required: true, message: 'Password is required' }],
		},
	},
];
