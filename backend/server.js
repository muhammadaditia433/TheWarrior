const orderRoutes=require("./routes/order");
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();
const adminRoutes = require("./routes/admin");

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/orders",orderRoutes);

app.get("/", (req, res) => {

    res.json({

        success: true,

        message: "KOPIJAK API RUNNING 🚀"

    });

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});

const menuRoutes = require("./routes/menu");

app.use("/api/menu", menuRoutes);

app.use("/api/admin", adminRoutes);