import express from "express";
import bodyParser from 'body-parser';

const app = express();
const PORT = 8000;

app.use(bodyParser.json()); //use json data throughout
 
app.listen(PORT, () => {
    console.log(`Server Running on port:: http://localhost:${PORT}`)
});