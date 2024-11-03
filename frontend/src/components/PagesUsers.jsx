import { useEffect, useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Modal from "./Modal";
import Navbar from "./Navbar";
import TabelUsers from "./TableUsers";
import User from "./User";

export default function PagesUsers() {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");

	function resetForm() {
		setName("");
		setEmail("");
		setAddress("");
	}

	async function getUsers() {
		try {
			const response = await fetch("http://localhost:3000/users");
			const data = await response.json();
			setUsers(data.data);
		} catch (error) {
			console.error(error);
		}
	}

	async function createUser() {
		const newUser = {
			name,
			email,
			address,
		};
		await fetch("http://localhost:3000/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		});
		getUsers();
	}

	async function deleteUser(id) {
		try {
			await fetch(`http://localhost:3000/users/${id}`, {
				method: "DELETE",
			});
			getUsers();
		} catch (error) {
			console.error(error);
		}
	}

	async function updateUser(updatedUser, id) {
		await fetch(`http://localhost:3000/users/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		});
		getUsers();
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<Navbar />
			<Modal
				id="modal-add-user"
				onClick={() => resetForm()}
				btnText="Add User"
				title="Add User"
			>
				<Form onSubmit={() => createUser()} idModal="modal-add-user" btnName="Add">
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
			<TabelUsers>
				{users.map((user, index) => (
					<User
						user={user}
						handleDeleteUser={deleteUser}
						key={index}
						handleUpdateUser={updateUser}
					/>
				))}
			</TabelUsers>
		</>
	);
}
