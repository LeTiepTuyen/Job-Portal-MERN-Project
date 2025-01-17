const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passportConfig = require("./middleware/passportConfig");
const cors = require("cors");
require("dotenv").config();
const setupSwaggerDocs = require("./utils/swagger"); // Import Swagger config
const initRouter = require("./routes");

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://tuyentieple:tuyentieple123@job-portal.t6g41.mongodb.net/JobPortal")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.error(err));

// Create an Express application, set port for server
const app = express();

const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(passportConfig.initialize());

// Setup Swagger docs
setupSwaggerDocs(app);

// Initialize routess
initRouter(app);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
