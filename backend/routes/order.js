const express = require("express");

const router = express.Router();

const {

    createOrder,

    getOrdersByUser,

    getOrderDetail,

    updateStatus,

    getAllOrders

} = require("../controllers/orderController");

router.post(

    "/create",

    createOrder

);

router.get(

    "/user/:user_id",

    getOrdersByUser

);

router.get(

    "/detail/:order_id",

    getOrderDetail

);

router.put(

    "/status/:id",

    updateStatus

);

router.get(

    "/",

    getAllOrders

);

module.exports = router;