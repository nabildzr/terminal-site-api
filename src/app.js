const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
const commentRoutes = require("./routes/commentRoutes");
const dotenv = require("dotenv"); 

dotenv.config();

const app = express();

const corsOptions = {
  origin: [
    // your allowed origins
  ],
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use((req, res, next) => {
  const methodColors = {
    GET: '\x1b[32m', // green
    POST: '\x1b[34m', // blue
    PUT: '\x1b[33m', // yellow
    DELETE: '\x1b[31m', // red
    PATCH: '\x1b[35m', // magenta
  };

  const resetColor = '\x1b[0m';
  const methodColor = methodColors[req.method] || resetColor;

  console.log(`${methodColor}${req.method} ${resetColor} ${req.path}\n\x1b[36mIP:\x1b[0m ${req.ip}\n\x1b[36mDEVICE:\x1b[0m ${req.get('User-Agent')}`);
  next();
});

app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/projects", projectRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Active!");  
});

module.exports = app;
