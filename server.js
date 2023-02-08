
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");

const express = require('express');
const connectDB = require('./config/db');

const app = express();
// dotenv config;
dotenv.config();

// //mongodb connection
connectDB();

//rest obejct


//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
