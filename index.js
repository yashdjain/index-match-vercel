// Import packages
const express = require("express");
const cors = require("cors")
require('dotenv').config()
const home = require("./routes/home");
const accountsRouter = require("./routes/accounts")
const logsRouter = require("./routes/logs")
const loansRouter = require("./routes/loans")
const metricsRouter = require("./routes/metrics")

// Middlewares
const app = express();
app.use(express.json());
app.use(cors())

// Routes
app.use("/home", home);
app.use("/accounts", accountsRouter)
app.use("/logs", logsRouter)
app.use("/loans", loansRouter)
app.use("/metrics", metricsRouter)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
