const db = require("../config/db");

exports.getAllMenu = async (req, res) => {

    try {

        const [menu] = await db.query(
            "SELECT * FROM menu"
        );

        const result = menu.map(item => ({
            ...item,
            gambar: `http://localhost:5173${item.gambar}`
        }));

        res.json(result);

    }

    catch (err) {

        res.status(500).json({
            message: err.message
        });

    }

};

exports.createMenu = async (req, res) => {

    try {

        const {
            nama,
            kategori,
            harga,
            gambar
        } = req.body;

        await db.query(

            `
            INSERT INTO menu
            (nama,kategori,harga,gambar)
            VALUES(?,?,?,?)
            `,

            [
                nama,
                kategori,
                harga,
                gambar
            ]

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

exports.updateMenu = async (req, res) => {

    try {

        const { id } = req.params;

        const {
            nama,
            kategori,
            harga,
            gambar
        } = req.body;

        await db.query(

            `
            UPDATE menu
            SET
            nama=?,
            kategori=?,
            harga=?,
            gambar=?
            WHERE id=?
            `,

            [
                nama,
                kategori,
                harga,
                gambar,
                id
            ]

        );

        res.json({
            success:true
        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({
            success:false
        });

    }

};

exports.deleteMenu = async (req,res)=>{

    try{

        const { id } = req.params;

        await db.query(

            `
            DELETE FROM menu
            WHERE id=?
            `,

            [id]

        );

        res.json({
            success:true
        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({
            success:false
        });

    }

};