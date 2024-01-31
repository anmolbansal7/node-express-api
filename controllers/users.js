import { v4 as uuidv4 } from "uuid";

let users = [
	// {
	// id: '',
	// firstName: "John",
	// lastName: "Doe",
	// age: 25,
	// }
];

export const getUsers = (req, res) => {
	res.send(users);
};

export const createUser = (req, res) => {
	const user = req?.body;

	users.push({ ...user, id: uuidv4() });

	res.send(`User with the name ${user?.firstName} ${user?.lastName} added.`);
};

export const getUserById = (req, res) => {
	const { id } = req?.params;

	const found_user = users.find((user) => user.id === id);

	res.send(found_user || "No User Found");
};

export const deleteUserById = (req, res) => {
	const { id } = req?.params;

	const userIndex = users.findIndex((user) => user.id === id);

	if (userIndex !== -1) {
		users.splice(userIndex, 1);

		res.send(`User with the id ${id} deleted.`);
	} else {
		res.status(404).send(`User with the id ${id} not found.`);
	}
};

export const updateUserById = (req, res) => {
	const { id } = req?.params;

	let userIndex = users.findIndex((user) => user.id === id);

	if (userIndex !== -1) {
		users[userIndex] = { ...users[userIndex], ...req.body };

		res.send(`User with the id ${id} updated.`);
	} else {
		res.status(404).send(`User with the id ${id} not found.`);
	}

	res.send(`User with the id ${id} updated.`);
};
