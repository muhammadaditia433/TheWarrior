const express = require("express");

const router = express.Router();

const AuthController = require("../controllers/AuthController");

const {
    register,
    login,
    getUsers,
    deleteUser,
    createUserByAdmin
} = require("../controllers/AuthController");

router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AUTH ROUTE"
    });
});

router.get("/test", (req, res) => {
    res.json({
        success: true,
        message: "TEST BERHASIL"
    });
});

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get(
    "/users",
    getUsers
);

router.delete(
    "/users/:id",
    deleteUser
);

router.post(
    "/create-user",
    createUserByAdmin
);

module.exports = router;