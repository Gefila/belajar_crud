export default function TabelUsers({ children }) {
	return (
		<div className="overflow-x-auto ">
			<table className="table table-zebra">
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>{children}</tbody>
			</table>
		</div>
	);
}
