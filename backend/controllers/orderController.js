const db = require("../config/db");

exports.createOrder = async (req, res) => {

    try {

        const {

            user_id,
            metode,
            cart

        } = req.body;

        const status =

            metode === "Bayar Tunai"

                ? "Menunggu Pembayaran"

                : "Menunggu";

        const [result] = await db.query(

            "INSERT INTO orders(user_id,metode,status) VALUES(?,?,?)",

            [

                user_id,

                metode,

                status

            ]

        );

        const orderId = result.insertId;

        for (const item of cart) {

            await db.query(

                `INSERT INTO order_detail
                (order_id,menu_id,qty,subtotal)
                VALUES(?,?,?,?)`,

                [

                    orderId,

                    item.id,

                    item.qty,

                    item.qty * item.harga

                ]

            );

        }

        res.json({

            success: true,

            orderId

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

exports.getOrdersByUser = async (req, res) => {

    try {

        const { user_id } = req.params;

        const [orders] = await db.query(

            `SELECT * FROM orders
             WHERE user_id = ?
             ORDER BY tanggal DESC`,

            [user_id]

        );

        res.json(orders);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            message: err.message

        });

    }

};

exports.getOrderDetail = async (req, res) => {

    try {

        const { order_id } = req.params;

        const [detail] = await db.query(

            `SELECT
                m.nama,
                od.qty,
                od.subtotal,
                o.metode,
                o.status
            FROM order_detail od
            JOIN menu m
                ON od.menu_id = m.id
            JOIN orders o
                ON od.order_id = o.id
            WHERE od.order_id = ?`,

            [order_id]

        );

        res.json(detail);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({
            message: err.message
        });

    }

};

exports.updateStatus = async (req, res) => {

    try {

        const { id } = req.params;

        const { status } = req.body;

        await db.query(

            `UPDATE orders
             SET status = ?
             WHERE id = ?`,

            [status, id]

        );

        res.json({

            success: true

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false

        });

    }

};

exports.getAllOrders = async (req, res) => {

    try {

        const [orders] = await db.query(

            `SELECT
                orders.id,
                users.nama,
                orders.metode,
                orders.status,
                orders.tanggal
            FROM orders
            JOIN users
                ON orders.user_id = users.id
            ORDER BY orders.id DESC`

        );

        res.json(orders);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: err.message

        });

    }

};

