import { Table } from '../Module/Table.js';

const table = new Table({
	columns: ["#", "First Name", "Last Name", "Email"],
	data: [
		["1", "Ini", "Budi", "ini.budi@gmail.com"],
		["2", "Ade", "Abang", "adeabang@gmail.com"]
	]
});

const app = document.getElementById('app');
table.render(app);