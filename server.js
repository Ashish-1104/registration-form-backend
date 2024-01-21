require('dotenv').config();

console.log(process.env.N);
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./router/auth-router")
const { connectDB } = require("./utlis/db")
const corsOptions = {
    origin: "https://registration-form-azure-xi.vercel.app",
    methods: "GET,POST",
    credentials: true
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", router);
app.get("/", (req, res) => {
    res.status(200).send("Welcome");
})

app.get("/register", (req, res) => {
    res.status(200).send("register");
})

const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('server is running: ' + PORT);
    })
})
