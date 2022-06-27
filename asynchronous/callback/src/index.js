import { Table } from '../Module/Table.js';
const app = document.getElementById('app');

$.ajax({
	url: 'https://jsonplaceholder.typicode.com/users',
	success: data => {
		postToWebPage(data);
	},
	error: (e) => {
		console.log(e.responseText);
	}
});

function postToWebPage(data) {
	const column = ["ID", "Name", "Username", "Email", "Address", "Company"];
	const dataMap = data.map(mappingData);

	const table = new Table({
		columns: column,
		data: dataMap
	});
	table.render(app);
}

function mappingData(item) {
	return item
}