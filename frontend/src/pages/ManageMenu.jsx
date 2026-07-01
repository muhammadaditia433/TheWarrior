import AdminNavbar from "../components/AdminNavbar";
import axios from "axios";
import { useEffect, useState } from "react";

function ManageMenu() {
  const [menus, setMenus] = useState([]);
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState("");

  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/menu");
      setMenus(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const resetForm = () => {
    setNama("");
    setKategori("");
    setHarga("");
    setGambar("");
    setEditId(null);
  };

  const handleSubmit = async () => {
    // --- 1. LOGIKA VALIDASI WAJIB ISI (PROTEKSI FORM) ---
    if (!nama.trim() || !kategori.trim() || !harga || !gambar.trim()) {
      alert(
        "❌ Gagal! Semua kolom (Nama, Kategori, Harga, Jalur Gambar) wajib diisi lengkap.",
      );
      return; // Menghentikan eksekusi kode agar tidak mengirim data kosong ke backend
    }

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/menu/${editId}`, {
          nama,
          kategori,
          harga,
          gambar,
        });
        alert("🎉 Menu berhasil diupdate");
      } else {
        await axios.post("http://localhost:5000/api/menu", {
          nama,
          kategori,
          harga,
          gambar,
        });
        alert("🎉 Menu berhasil ditambahkan");
      }
      resetForm();
      fetchMenu();
    } catch (err) {
      console.log(err);
      alert("❌ Terjadi kesalahan sistem saat menyimpan data.");
    }
  };

  const handleEdit = (menu) => {
    setEditId(menu.id);
    setNama(menu.nama);
    setKategori(menu.kategori);
    setHarga(menu.harga);
    setGambar(menu.gambar);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Yakin hapus menu ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      alert("Menu berhasil dihapus");
      fetchMenu();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div
        className="container py-5"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        <h2 className="mb-4 fw-bold">Kelola Menu KOPIJAK</h2>

        <div
          className="card p-4 shadow border-0 mb-5"
          style={{ borderRadius: "15px" }}
        >
          <h5 className="mb-3 fw-bold text-secondary">
            {editId ? "✏️ Edit Informasi Menu" : "➕ Tambah Menu Baru"}
          </h5>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nama Menu (Contoh: Americano)"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Kategori (Contoh: Coffee / Non Coffee / Dessert)"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          />

          <input
            type="number"
            className="form-control mb-2"
            placeholder="Harga Nominal (Contoh: 25000)"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Path Gambar / URL Aset (Contoh: /src/assets/menu-1.jpg)"
            value={gambar}
            onChange={(e) => setGambar(e.target.value)}
          />

          <div>
            <button
              className="btn btn-warning me-2 fw-bold text-white px-4"
              onClick={handleSubmit}
              style={{
                background: "#DA9F5B",
                border: "none",
                borderRadius: "8px",
              }}
            >
              {editId ? "Update Data" : "Simpan Menu"}
            </button>

            {editId && (
              <button
                className="btn btn-secondary px-4"
                onClick={resetForm}
                style={{ borderRadius: "8px" }}
              >
                Batal
              </button>
            )}
          </div>
        </div>

        <div
          className="table-responsive shadow-sm"
          style={{ borderRadius: "12px", overflow: "hidden" }}
        >
          <table className="table table-bordered table-hover mb-0 align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>No</th>
                <th>Gambar</th>
                <th>Nama</th>
                <th>Kategori</th>
                <th>Harga</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((item, index) => (
                <tr key={item.id || index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">
                    <img
                      src={item.gambar}
                      alt={item.nama}
                      width="60"
                      height="60"
                      style={{
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />
                  </td>
                  <td className="fw-semibold">{item.nama}</td>
                  <td>
                    <span
                      className="badge bg-secondary px-3 py-2"
                      style={{ borderRadius: "20px" }}
                    >
                      {item.kategori}
                    </span>
                  </td>
                  <td className="fw-bold" style={{ color: "#DA9F5B" }}>
                    Rp {Number(item.harga || 0).toLocaleString("id-ID")}
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-primary btn-sm me-2 px-3"
                      onClick={() => handleEdit(item)}
                      style={{ borderRadius: "6px" }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm px-3"
                      onClick={() => handleDelete(item.id)}
                      style={{ borderRadius: "6px" }}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default ManageMenu;
