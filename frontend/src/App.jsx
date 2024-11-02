import { useEffect } from "react";
import TabelUsers from "./components/TableUsers";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import FormAdd from "./components/Form";

function App() {
	const [users, setUsers] = useState([]);

	function handleDelete(id) {
		fetch(`http://localhost:3000/users/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.message === "delete user success") {
					const newUsers = users.filter((user) => user.id !== id);
					setUsers(newUsers);
				}
			});
	}

	useEffect(() => {
		async function getUsers() {
			const res = await fetch("http://localhost:3000/users");
			const data = await res.json();
			setUsers(data.data);
		}
		getUsers();
	}, []);

	return (
		<div>
			<Navbar />
			<Modal>
				<FormAdd />
			</Modal>
			<TabelUsers users={users} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
