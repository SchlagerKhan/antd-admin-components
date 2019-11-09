export const COLUMNS = [
	{
		editable: true,
		title: 'Firstname',
		dataIndex: 'firstname',
	},
	{
		editable: true,
		title: 'Lastname',
		dataIndex: 'lastname',
	},
	{
		title: 'Age',
		dataIndex: 'age',
	},
];

export const DATA = [
	{
		id: 1,
		firstname: 'Joan',
		lastname: 'Smith',
		age: 28,
	},
	{
		id: 2,
		firstname: 'John',
		lastname: 'Doe',
		age: 65,
	},
];

export const ACTIONS = {
	onEdit: (item, index) => console.log('Edit', item, index),
	onDelete: (item, index) => console.log('Delete', item, index),
};

export const EXTRA_ACTIONS = [
	{
		key: 'home',
		type: 'default',
		icon: 'home',
		onClick: (item, index) => console.log('Home', item, index),
	},
];

export function onAdd() {
	console.log('Add to table');
}

export function onSearch(value) {
	console.log('Search', value);
}

export function onEdit(column, item, change) {
	console.log(column, item, change);
}
