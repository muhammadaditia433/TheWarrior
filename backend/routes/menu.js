const express = require("express");

const router = express.Router();

const {

    getAllMenu,
    createMenu,
    updateMenu,
    deleteMenu

} = require("../controllers/menuController");

router.get(
    "/",
    getAllMenu
);

router.post(
    "/",
    createMenu
);

router.put(
    "/:id",
    updateMenu
);

router.delete(
    "/:id",
    deleteMenu
);

module.exports = router;