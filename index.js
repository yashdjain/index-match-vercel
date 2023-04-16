// Import packages
const express = require("express");
const home = require("./routes/home");
const accounts = require("./routes/accounts")
const logs = require("./routes/logs")
const cors = require("cors")

// Middlewares
const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use("/home", home);
app.use("/accounts", accounts)
app.use("/logs", logs)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
