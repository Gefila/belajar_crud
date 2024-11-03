import { useEffect, useState } from "react";
import Form from "./Form";
import Input from "./Input";
import Modal from "./Modal";
import Navbar from "./Navbar";
import TabelUsers from "./TableUsers";
import User from "./User";
import Alert from "./Alert";

export default function PagesUsers() {
	const [users, setUsers] = useState([]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
    const [alert, setAlert] = useState({
        message: "",
        type: "",
    });

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
        setAlert({
            message: "User added successfully",
            type: "success",
        });
	}

	async function deleteUser(id) {
		try {
			await fetch(`http://localhost:3000/users/${id}`, {
				method: "DELETE",
			});
			getUsers();
            setAlert({
                message: "User deleted successfully",
                type: "success",
            });
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
        setAlert({
            message: "User updated successfully",
            type: "success",
        });
	}

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<Navbar />
            {alert && <Alert type={alert.type} message={alert.message} setAlert={setAlert}/>}
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
