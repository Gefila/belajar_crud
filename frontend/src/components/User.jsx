export default function User({user, handleDelete}) {
	return (
		<tr>
			<th>{user.id}</th>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.address}</td>
			<td>
				<button className="btn btn-sm btn-primary">Edit</button>
				<button className="btn btn-sm btn-danger" onClick={()=> handleDelete(user.id)}>Delete</button>
			</td>
		</tr>
	);
}
