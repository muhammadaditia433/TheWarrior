import { useState, useEffect } from "react";
import axios from "axios";

import UserNavbar from "../components/UserNavbar";
import MenuCard from "../components/MenuCard";
import FloatingCart from "../components/FloatingCart";

function Menu() {
    const [menuData, setMenuData] = useState([]);
    const [search, setSearch] = useState("");
    const [kategori, setKategori] = useState("Semua");

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        try {
            const res = await axios.get("http://localhost:5000/api/menu");
            setMenuData(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    const filteredMenu = menuData.filter((item) => {
        const cocokKategori = kategori === "Semua" || item.kategori === kategori;
        const cocokSearch = item.nama.toLowerCase().includes(search.toLowerCase());
        return cocokKategori && cocokSearch;
    });

    // Array bantuan untuk merender tombol filter kategori secara dinamis dan rapi
    const categories = ["Semua", "Coffee", "Non Coffee", "Dessert", "Snack"];

    return (
        <>
            <UserNavbar />
            <div className="container-fluid px-lg-5 py-5" style={{ backgroundColor: "#fbf8f5", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", paddingTop: "110px" }}>
                
                {/* Bagian Judul Halaman */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold mb-2" style={{ color: "#211613" }}>Katalog Menu KOPIJAK</h1>
                    <div className="mx-auto my-2" style={{ width: "40px", height: "3px", background: "#DA9F5B" }}></div>
                    <p className="text-muted small">Pilih dan temukan racikan menu kopi urban favorit penunjang hari produktifmu.</p>
                </div>

                {/* Bilah Pencarian Modern */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-5 col-md-7">
                        <div className="position-relative shadow-sm" style={{ borderRadius: "12px" }}>
                            <input
                                className="form-control px-4 py-2.5 border-0"
                                style={{
                                    borderRadius: "12px",
                                    fontSize: "14px",
                                    boxShadow: "none",
                                    background: "#ffffff"
                                }}
                                placeholder="🔍 Cari menu kopi, cemilan, atau minuman favoritmu..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Navigasi Filter Kategori Pil (Pills) */}
                <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
                    {categories.map((cat) => {
                        const isActive = kategori === cat;
                        return (
                            <button
                                key={cat}
                                onClick={() => setKategori(cat)}
                                className="btn fw-semibold px-4 py-2"
                                style={{
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    transition: "all 0.3s ease",
                                    // Logika styling dinamis berdasarkan status aktif tombol
                                    background: isActive ? "#DA9F5B" : "#ffffff",
                                    color: isActive ? "#ffffff" : "#211613",
                                    border: isActive ? "1px solid #DA9F5B" : "1px solid rgba(0,0,0,0.08)",
                                    boxShadow: isActive ? "0 4px 15px rgba(218, 159, 91, 0.25)" : "0 2px 8px rgba(0,0,0,0.02)"
                                }}
                                onMouseOver={(e) => {
                                    if (!isActive) {
                                        e.target.style.background = "rgba(218, 159, 91, 0.08)";
                                        e.target.style.borderColor = "#DA9F5B";
                                    }
                                }}
                                onMouseOut={(e) => {
                                    if (!isActive) {
                                        e.target.style.background = "#ffffff";
                                        e.target.style.borderColor = "rgba(0,0,0,0.08)";
                                    }
                                }}
                            >
                                {cat}
                            </button>
                        );
                    })}
                </div>

                {/* Grid Item Konten Produk */}
                <div className="row g-4">
                    {filteredMenu.length > 0 ? (
                        filteredMenu.map((item) => (
                            <div className="col-xl-3 col-lg-4 col-sm-6 d-flex align-items-stretch" key={item.id}>
                                <MenuCard menu={item} />
                            </div>
                        ))
                    ) : (
                        // Tampilan jika pencarian kosong atau tidak ditemukan
                        <div className="col-12 text-center py-5">
                            <span style={{ fontSize: "40px" }}>☕</span>
                            <h5 className="fw-semibold text-muted mt-3">Menu yang Anda cari belum tersedia</h5>
                            <p className="text-muted small">Coba cari dengan kata kunci lain atau pilih kategori yang berbeda.</p>
                        </div>
                    )}
                </div>

            </div>
            <FloatingCart />
        </>
    );
}

export default Menu;
