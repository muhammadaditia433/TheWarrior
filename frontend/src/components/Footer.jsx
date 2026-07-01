import React from "react";
import bg from "../assets/bg.jpg";

// --- IMPORT LOGO LOKAL DARI FOLDER ASSETS ---
import logoWa from "../assets/logo-wa.jpeg";
import logoGithub from "../assets/logo-github.png";
import logoIg from "../assets/logo-ig.jpeg";

function Footer() {
    return (
        <div
            id="footer"
            className="container-fluid text-white mt-5 px-0 position-relative"
            style={{
                background: `linear-gradient(rgba(24, 15, 13, 0.96), rgba(15, 10, 9, 0.99)), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "hidden",
                paddingTop: "90px",
                fontFamily: "'Poppins', sans-serif",
                borderTop: "2px solid #DA9F5B"
            }}
        >
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row g-5 justify-content-between">
                    
                    {/* Kolom 1: Profil Brand */}
                    <div className="col-lg-4 col-md-6">
                        <h3 className="fw-bold mb-3" style={{ color: "#DA9F5B", letterSpacing: "1.5px" }}>
                            KOPIJAK.
                        </h3>
                        <p className="lh-lg mb-4 text-white-50" style={{ fontSize: "14px" }}>
                            Simulasi platform digital startup coffee shop modern hasil integrasi tugas kuliah Fullstack. Kami menghadirkan kemudahan memesan kopi berkualitas untuk mendukung produktivitas gaya hidup masyarakat urban Jakarta.
                        </p>
                        <a 
                            href="/login" 
                            className="btn btn-sm px-4 py-2 text-white fw-bold shadow-sm" 
                            style={{ 
                                background: "#DA9F5B", 
                                borderRadius: "10px", 
                                fontSize: "13px",
                                transition: "all 0.3s ease" 
                            }}
                            onMouseOver={(e) => e.target.style.background = "#bc8443"}
                            onMouseOut={(e) => e.target.style.background = "#DA9F5B"}
                        >
                            Portal Akses <i className="bi bi-arrow-right-short ms-1"></i>
                        </a>
                    </div>
                    
                    {/* Kolom 2: Kontak Resmi */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: "1.5px", fontSize: "15px", color: "#DA9F5B" }}>
                            Hubungi Kami
                        </h5>
                        <ul className="list-unstyled text-white-50" style={{ fontSize: "14px" }}>
                            <li className="mb-3 d-flex align-items-center">
                                <span className="me-3" style={{ fontSize: "18px" }}>📍</span> 
                                <span>Jakarta, Indonesia</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <span className="me-3" style={{ fontSize: "18px" }}>📞</span> 
                                <span className="fw-semibold text-white">+62 877-6523-8922</span>
                            </li>
                            <li className="mb-3 d-flex align-items-center">
                                <span className="me-3" style={{ fontSize: "18px" }}>✉️</span> 
                                <span>kopijak.project@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Kolom 3: Tugas Akademik */}
                    <div className="col-lg-2 col-md-6">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: "1.5px", fontSize: "15px", color: "#DA9F5B" }}>
                            Detail Tugas
                        </h5>
                        <div style={{ fontSize: "14px" }}>
                            <span className="text-white-50 d-block mb-1" style={{ fontSize: "13px" }}>Mata Kuliah:</span>
                            <p className="fw-semibold text-white mb-3">Fullstack Development</p>
                            <span className="text-white-50 d-block mb-1" style={{ fontSize: "13px" }}>Kelompok:</span>
                            <p className="fw-bold mb-0" style={{ color: "#DA9F5B", letterSpacing: "0.5px" }}>THE WARRIOR</p>
                        </div>
                    </div>

                    {/* Kolom 4: Tombol Jejaring Sosial Interaktif */}
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-uppercase fw-bold mb-4" style={{ letterSpacing: "1.5px", fontSize: "15px", color: "#DA9F5B" }}>
                            Media Sosial
                        </h5>
                        <p className="text-white-50 mb-3" style={{ fontSize: "14px" }}>
                            Hubungi perwakilan tim pengembang kelompok kami lewat tautan resmi berikut:
                        </p>
                        <div className="d-flex gap-2">
                            <a 
                                href="https://wa.me" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn d-flex align-items-center justify-content-center shadow-sm" 
                                style={{ width: "45px", height: "45px", borderRadius: "12px", overflow: "hidden", padding: 0, border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.3s ease" }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.borderColor = "#DA9F5B"; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                            >
                                <img src={logoWa} alt="WhatsApp" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </a>
                            
                            <a 
                                href="https://github.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn d-flex align-items-center justify-content-center shadow-sm" 
                                style={{ width: "45px", height: "45px", borderRadius: "12px", overflow: "hidden", padding: 0, border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.3s ease" }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.borderColor = "#DA9F5B"; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                            >
                                <img src={logoGithub} alt="GitHub" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </a>
                            
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noreferrer" 
                                className="btn d-flex align-items-center justify-content-center shadow-sm" 
                                style={{ width: "45px", height: "45px", borderRadius: "12px", overflow: "hidden", padding: 0, border: "1px solid rgba(255,255,255,0.15)", transition: "all 0.3s ease" }}
                                onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.borderColor = "#DA9F5B"; }}
                                onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                            >
                                <img src={logoIg} alt="Instagram" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bagian Hak Cipta Kaca (Glassmorphism) */}
            <div
                className="container-fluid mt-5 py-4"
                style={{
                    borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                    background: "rgba(10, 6, 5, 0.7)",
                    backdropFilter: "blur(5px)",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div className="container text-center text-white-50" style={{ fontSize: "13px", letterSpacing: "0.3px" }}>
                    <p className="mb-1">&copy; 2026 <strong style={{ color: "#DA9F5B" }}>KOPIJAK Project</strong>. All Rights Reserved.</p>
                    <p className="mb-0" style={{ fontSize: "12px", opacity: 0.8 }}>Crafted expertly by Kelompok "The Warrior" • Tugas UAS Pemrograman Fullstack</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
