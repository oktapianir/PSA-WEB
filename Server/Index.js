const express = require("express");
// const mysql = require("mysql2");
const multer = require("multer");
const path = require("path");
const app = express();
const db = require("./db");
const PORT = 5000;

const cors = require("cors");
app.use(cors());

app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

//for auth login & register 
const authRoutes = require("./Routes/auth");
app.use("/api/auth", authRoutes);

//for users especially totalUser in admin
const usersRoutes = require("./Routes/users");
app.use("/api/users", usersRoutes);

const programsRoutes = require("./Routes/programs");
app.use("/api/programs", programsRoutes);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
