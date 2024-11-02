import User from "./User";

export default function TabelUsers({users, handleDelete}) {
	return (
		<div className="overflow-x-auto ">
			<table className="table table-zebra">
				{/* head */}
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Email</th>
						<th>Address</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index)=>(
                        <User user={user} key={index} handleDelete={handleDelete}/>
                    ))}
				</tbody>
			</table>
		</div>
	);
}
