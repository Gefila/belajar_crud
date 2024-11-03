import { useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Modal from "./Modal";

export default function User({ user, handleDeleteUser, handleUpdateUser }) {
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [address, setAddress] = useState(user.address);

	function updateUser(id) {
		const updatedUser = {
			id: user.id,
			name,
			email,
			address,
		};
		handleUpdateUser(updatedUser, id);
	}

	const resetForm = () => {
		setName(user.name);
		setEmail(user.email);
		setAddress(user.address);
	};

	return (
		<tr>
			<th>{user.id}</th>
			<td>{user.name}</td>
			<td>{user.email}</td>
			<td>{user.address}</td>
			<td>
				<Modal
					btnText="Edit"
					id={`modal-edit-${user.id}`}
					title="Edit User"
					onClick={() => {
						resetForm();
					}}
				>
					<Form
						btnName="Edit"
						idModal={`modal-edit-${user.id}`}
						onSubmit={() => updateUser(user.id)}
					>
						<Input value={name} onChange={setName}>
							Name
						</Input>
						<Input value={email} onChange={setEmail}>
							Email
						</Input>
						<Input value={address} onChange={setAddress}>
							Address
						</Input>
					</Form>
				</Modal>
				<Modal
					btnText="delete"
					id={`modal-delete-${user.id}`}
					title="Delete User"
				>
					<p className="text-xl">{`Are you sure you want to delete this user? ${user.name}`}</p>
					<div className="mt-5 w-full flex gap-2">
						<button
							className="btn bg-error flex-grow"
							onClick={() => {
								handleDeleteUser(user.id);
								document.getElementById(`modal-delete-${user.id}`).close();
							}}
						>
							Delete
						</button>
						<button
							className="btn bg-primary flex-grow"
							onClick={() =>
								document.getElementById(`modal-delete-${user.id}`).close()
							}
						>
							Cancel
						</button>
					</div>
				</Modal>
			</td>
		</tr>
	);
}
