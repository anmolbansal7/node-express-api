import express from "express";
import bodyParser from "body-parser";

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); //use json data throughout

app.use("/users", usersRoutes);

// get request for homepage
app.get("/", (req, res) => {
	console.log("Test");

	res.send("Hello from homepage.");
});

app.listen(PORT, () => {
	console.log(`Server Running on port:: http://localhost:${PORT}`);
});
