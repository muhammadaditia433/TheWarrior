const db = require("../config/db");

// ===================== GET MENU =====================
exports.getAllMenu = async (req, res) => {
  try {
    const [menu] = await db.query("SELECT * FROM menu");

    const result = menu.map((item) => ({
      ...item,
      gambar: `http://localhost:5173${item.gambar}`,
    }));

    res.json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// ===================== CREATE MENU =====================
exports.createMenu = async (req, res) => {
  try {
    const {
      nama,
      kategori,
      harga,
      gambar,
      deskripsi,
    } = req.body;

    await db.query(
      `
      INSERT INTO menu
      (nama, kategori, harga, gambar, deskripsi)
      VALUES (?, ?, ?, ?, ?)
      `,
      [
        nama,
        kategori,
        harga,
        gambar,
        deskripsi,
      ]
    );

    res.json({
      success: true,
      message: "Menu berhasil ditambahkan",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ===================== UPDATE MENU =====================
exports.updateMenu = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      nama,
      kategori,
      harga,
      gambar,
      deskripsi,
    } = req.body;

    await db.query(
      `
      UPDATE menu
      SET
      nama=?,
      kategori=?,
      harga=?,
      gambar=?,
      deskripsi=?
      WHERE id=?
      `,
      [
        nama,
        kategori,
        harga,
        gambar,
        deskripsi,
        id,
      ]
    );

    res.json({
      success: true,
      message: "Menu berhasil diupdate",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// ===================== DELETE MENU =====================
exports.deleteMenu = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      `
      DELETE FROM menu
      WHERE id=?
      `,
      [id]
    );

    res.json({
      success: true,
      message: "Menu berhasil dihapus",
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};