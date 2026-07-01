const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {

    try {

        const { nama, email, password } = req.body;

        if (!nama || !email || !password) {

            return res.status(400).json({

                success: false,
                message: "Semua field wajib diisi"

            });

        }

        const [check] = await db.query(

            "SELECT * FROM users WHERE email=?",
            [email]

        );

        if (check.length > 0) {

            return res.json({

                success: false,
                message: "Email sudah digunakan"

            });

        }

        const hash = await bcrypt.hash(password, 10);

        await db.query(

            "INSERT INTO users(nama,email,password,role) VALUES(?,?,?,?)",

            [

                nama,

                email,

                hash,

                "user"

            ]

        );

        res.json({

            success: true,

            message: "Register berhasil"

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email dan password wajib diisi"
            });

        }

        const [user] = await db.query(
            "SELECT * FROM users WHERE email=?",
            [email]
        );

        if (user.length === 0) {

            return res.json({
                success: false,
                message: "Email tidak ditemukan"
            });

        }

        const valid = await bcrypt.compare(
            password,
            user[0].password
        );

        if (!valid) {

            return res.json({
                success: false,
                message: "Password salah"
            });

        }

        const token = jwt.sign(

            {
                id: user[0].id,
                role: user[0].role
            },

            process.env.JWT_SECRET,

            {
                expiresIn: "1d"
            }

        );

        res.json({

            success: true,

            message: "Login berhasil",

            token,

            user: {

                id: user[0].id,
                nama: user[0].nama,
                email: user[0].email,
                role: user[0].role

            }

        });

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false,

            message: "Server Error"

        });

    }

};

exports.getUsers = async (req, res) => {

    try {

        const [users] = await db.query(

            `
            SELECT
                id,
                nama,
                email,
                role
            FROM users
            ORDER BY id DESC
            `
        );

        res.json(users);

    }

    catch (err) {

        console.log(err);

        res.status(500).json({

            success: false

        });

    }

};

exports.deleteUser = async (req, res) => {

    try {

        const { id } = req.params;

        await db.query(

            `
            DELETE FROM users
            WHERE id = ?
            `,

            [id]

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

exports.createUserByAdmin = async (req, res) => {

    try {

        const {

            nama,
            email,
            password,
            role

        } = req.body;

        const [check] = await db.query(

            "SELECT * FROM users WHERE email=?",

            [email]

        );

        if (check.length > 0) {

            return res.json({

                success:false,

                message:"Email sudah digunakan"

            });

        }

        const hash = await bcrypt.hash(

            password,

            10

        );

        await db.query(

            `
            INSERT INTO users
            (nama,email,password,role)
            VALUES(?,?,?,?)
            `,

            [

                nama,
                email,
                hash,
                role

            ]

        );

        res.json({

            success:true,

            message:"User berhasil ditambahkan"

        });

    }

    catch(err){

        console.log(err);

        res.status(500).json({

            success:false

        });

    }

};