import { TableColumn } from '../../../table';
import { FormFieldTemplateElement } from '../../../form';

export const columns: TableColumn[] = [
	{
		title: 'ID',
		dataIndex: 'id',
	},
	{
		title: 'First name',
		dataIndex: 'firstName',
	},
];

export const fields: FormFieldTemplateElement[] = [
	{
		name: 'firstName',
		label: 'First name',
	},
	{
		name: 'lastName',
		label: 'Last name',
	},
];

export const data = [
	{
		id: 1,
		firstName: 'Test',
		lastName: 'Testson',
	},
	{
		id: 2,
		firstName: 'John',
		lastName: 'Doeson',
	},
];

function fetchData() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(data[0]);
		}, 1000);
	});
}

export function onAdd(values) {
	console.log('Add', values);
}

export function onSave(values) {
	console.log('On save', values);
}

const addOpts = {
	fields: [
		{
			name: 'firstName',
			label: 'First name',
		},
	],
	onAdd,
};

export const rootPath = '/root-path';
export const overview = { columns, data, addOpts };
export const form = { title: 'Title', fields, fetchData, onSave };
