const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const doctor = require("./Model/doctors");
const patient = require("./Model/patients");
// const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const dburl = process.env.MONGODB_URL;

mongoose
  .connect("dbUrl")
  .then(() => {
    console.log("Successfully connected");
  })
  .catch((e) => {
    console.log("Error:", e);
  });
app.get("/", (req, res) => {
  res.send("Hospital Patient Management API");
});
app.post("/signup", (req, res) => {
  res.send("Signedup Successfully");
});

app.use(cors());
app.get("/", (req, res) => {
  res.json({
    message: " Hospital",
  });
});

// mongoose.connect(process.env.MONGoDB_Url);

app
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  })
  .catch((e) => {
    console.log("ERROR:", e);
  });
app.use(express.json());

app.use("/", require("./routes/doctor"));
app.use("/", require("./routes/patient"));
