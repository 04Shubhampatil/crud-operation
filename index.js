import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import "dotenv/config"
import Database from "./db/db.js"
import userrouter from "./routes/userRouter.js"
const app = express();
const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('welcome to rest Api');
});

app.use("/user", userrouter)

Database().then(() => {
    console.log("database connected successfully");

})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});