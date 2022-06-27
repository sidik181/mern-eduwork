class Table {
	constructor(init) {
		this.init = init;
	}

	createHeader(data) {
		let open = "<thead class='bg-light'><tr>";
		let close = "</tr></thead>";
		data.forEach((d) => {
			open += `<th>${d}</th>`;
		});

		return open + close;
	}

	createBody(data) {
		let open = "<tbody>";
		let close = "</tbody>";
		data.forEach((d) => {
			open += `
			<tr>
				<td>${d.id}</td>
				<td>${d.name}</td>
				<td>${d.username}</td>
				<td>${d.email}</td>
				<td>${d.address.street + ', ' + d.address.suite + ', ' + d.address.city}</td>
				<td>${d.company.name}</td>
			</tr>
			`;
		});

		return open + close;
	}

	render(element) {
		let table =
			"<table class='table table-hover'>" +
			this.createHeader(this.init.columns) +
			this.createBody(this.init.data) +
			"</table>";
		element.innerHTML = table;
	}
}

export { Table };