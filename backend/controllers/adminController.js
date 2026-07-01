const db = require("../config/db");

exports.getDashboard = async (req, res) => {

    try {

        const [[users]] = await db.query(
            "SELECT COUNT(*) AS totalUser FROM users"
        );

        const [[menu]] = await db.query(
            "SELECT COUNT(*) AS totalMenu FROM menu"
        );

        const [[orders]] = await db.query(
            "SELECT COUNT(*) AS totalOrder FROM orders"
        );

        const [[income]] = await db.query(
            `
            SELECT
            IFNULL(SUM(subtotal),0) AS totalIncome
            FROM order_detail
            `
        );

        res.json({

            totalUser: users.totalUser,
            totalMenu: menu.totalMenu,
            totalOrder: orders.totalOrder,
            totalIncome: income.totalIncome

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