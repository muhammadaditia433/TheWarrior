import React from "react";
import menu1 from "../assets/menu-1.jpg";
import menu2 from "../assets/menu-2.jpg";
import menu3 from "../assets/menu-3.jpg";
import menu4 from "../assets/menu-4.jpg";

function MenuPreview() {
    const menuList = [
        {
            img: menu1,
            name: "Kopi Hitam",
            desc: "Kopi hitam premium dengan cita rasa khas nusantara.",
            price: "Rp 25.000"
        },
        {
            img: menu2,
            name: "Cappuccino",
            desc: "Perpaduan espresso dan susu dengan foam yang lembut.",
            price: "Rp 30.000"
        },
        {
            img: menu3,
            name: "Latte",
            desc: "Rasa creamy gurih yang cocok dinikmati kapan saja.",
            price: "Rp 32.000"
        },
        {
            img: menu4,
            name: "Mocachino",
            desc: "Perpaduan cokelat premium dan kopi yang menggoda selera.",
            price: "Rp 30.000"
        }
    ];

    return (
        <section
            id="menu"
            className="container py-5"
            style={{ fontFamily: "'Poppins', sans-serif", paddingTop: "80px", paddingBottom: "80px" }}
        >
            {/* Bagian Judul Seksi */}
            <div className="section-title text-center mb-5">
                <h5
                    style={{
                        color: "#DA9F5B",
                        letterSpacing: "5px",
                        fontWeight: "600"
                    }}
                >
                    MENU KAMI
                </h5>
                <h1 className="fw-bold mt-2" style={{ color: "#211613" }}>
                    Menu Andalan KOPIJAK
                </h1>
                <div 
                    className="mx-auto my-3" 
                    style={{ width: "50px", height: "3px", background: "#DA9F5B" }}
                ></div>
            </div>

            {/* Bagian Grid Kartu Menu */}
            <div className="row g-4">
                {menuList.map((menu, index) => (
                    <div className="col-md-6 col-lg-3" key={index}>
                        <div 
                            className="card h-100 border-0 shadow-sm overflow-hidden"
                            style={{
                                borderRadius: "20px",
                                background: "#ffffff",
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.boxShadow = "0 15px 30px rgba(33, 22, 19, 0.08)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.03)";
                            }}
                        >
                            {/* Bingkai Foto Menu Simetris */}
                            <div style={{ width: "100%", height: "220px", overflow: "hidden" }}>
                                <img 
                                    src={menu.img} 
                                    alt={menu.name}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }} 
                                />
                            </div>

                            {/* Badan Kartu */}
                            <div className="card-body text-center d-flex flex-column p-4">
                                <h5 className="fw-bold mb-2" style={{ color: "#211613", fontSize: "18px" }}>
                                    {menu.name}
                                </h5>
                                <p className="text-muted small lh-relaxed mb-3" style={{ flexGrow: 1 }}>
                                    {menu.desc}
                                </p>
                                <span 
                                    className="fw-bold fs-5 d-block mt-2" 
                                    style={{ color: "#DA9F5B" }}
                                >
                                    {menu.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bagian Teks Penutup dan Tombol Ajakan */}
            <div className="text-center mt-5 pt-4">
                <p className="lead fw-semibold mb-2" style={{ color: "#3a2823", fontSize: "18px" }}>
                    ✨ Masih banyak pilihan menu spesial lainnya ✨
                </p>
                <p className="text-muted small mb-4">
                    Silakan login untuk melihat seluruh katalog lengkap dan melakukan transaksi pemesanan secara online.
                </p>

                <a 
                    href="/login" 
                    className="btn px-5 py-2.5 shadow-sm text-white fw-bold d-inline-flex align-items-center"
                    style={{
                        background: "#DA9F5B",
                        borderRadius: "12px",
                        fontSize: "15px",
                        transition: "all 0.3s ease",
                        border: "none"
                    }}
                    onMouseOver={(e) => e.target.style.background = "#bc8443"}
                    onMouseOut={(e) => e.target.style.background = "#DA9F5B"}
                >
                    Login untuk Melanjutkan <i className="bi bi-arrow-right-short ms-2 fs-5"></i>
                </a>
            </div>
        </section>
    );
}

export default MenuPreview;
