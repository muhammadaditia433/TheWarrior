import React from "react";
import aboutImg from "../assets/about.png";

function About() {
    return (
        <section
            id="about"
            className="container-fluid py-5 position-relative"
            style={{ 
                backgroundColor: "#FFFBF2", 
                fontFamily: "'Poppins', sans-serif",
                paddingTop: "100px",
                paddingBottom: "100px"
            }}
        >
            <div className="container">
                {/* Bagian Judul Seksi */}
                <div className="section-title text-center mb-5">
                    <h5
                        style={{
                            color: "#DA9F5B",
                            letterSpacing: "5px",
                            fontWeight: "600"
                        }}
                    >
                        TENTANG KAMI
                    </h5>

                    <h1 className="fw-bold mt-2" style={{ color: "#211613" }}>
                        KOPIJAK – Kopi Urban Jakarta
                    </h1>
                    <div 
                        className="mx-auto my-3" 
                        style={{ width: "50px", height: "3px", background: "#DA9F5B" }}
                    ></div>
                </div>

                <div className="row align-items-center g-5 mt-3">
                    {/* Kolom Kiri: Cerita Kami */}
                    <div className="col-lg-4 col-md-6">
                        <div className="pe-lg-3">
                            <h2 className="fw-bold mb-3" style={{ color: "#211613" }}>
                                Cerita Kami
                            </h2>

                            <p className="lead fw-semibold mb-4" style={{ color: "#3a2823", fontSize: "17px", lineHeight: "1.6" }}>
                                KOPIJAK lahir dari semangat anak kota yang menjadikan kopi sebagai bagian dari gaya hidup urban.
                            </p>

                            <p className="text-muted lh-lg mb-4" style={{ fontSize: "14px" }}>
                                Sebagai startup kopi lokal, KOPIJAK hadir untuk menghadirkan pengalaman ngopi yang modern, nyaman, dan relevan dengan dinamika kehidupan masyarakat Jakarta.
                            </p>

                            <a 
                                href="/#menu" 
                                className="btn px-4 py-2.5 shadow-sm text-white fw-bold d-inline-flex align-items-center"
                                style={{
                                    background: "linear-gradient(135deg, #211613, #3a2823)",
                                    borderRadius: "10px",
                                    fontSize: "14px",
                                    transition: "all 0.3s ease",
                                    border: "none"
                                }}
                                onMouseOver={(e) => e.target.style.transform = "translateY(-3px)"}
                                onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                            >
                                Lihat Menu Andalan <span className="ms-2">&rarr;</span>
                            </a>
                        </div>
                    </div>

                    {/* Kolom Tengah: Foto */}
                    <div className="col-lg-4 text-center my-4 my-lg-0">
                        <div 
                            className="p-3 d-inline-block" 
                            style={{ 
                                background: "#ffffff", 
                                borderRadius: "30px", 
                                boxShadow: "0 20px 40px rgba(33, 22, 19, 0.06)",
                                border: "1px solid rgba(218, 159, 91, 0.15)"
                            }}
                        >
                            <img
                                src={aboutImg}
                                alt="About KOPIJAK"
                                className="img-fluid"
                                style={{
                                    maxHeight: "420px",
                                    borderRadius: "20px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>

                    {/* Kolom Kanan: Visi & Keunggulan */}
                    <div className="col-lg-4 col-md-6">
                        <div className="ps-lg-3">
                            <h2 className="fw-bold mb-3" style={{ color: "#211613" }}>
                                Visi Kami
                            </h2>

                            <p className="text-muted lh-lg mb-4" style={{ fontSize: "14px" }}>
                                Menjadi startup kopi lokal yang dikenal sebagai representasi gaya hidup urban Jakarta.
                            </p>

                            {/* List Minimalis */}
                            <ul className="list-unstyled mb-4" style={{ fontSize: "15px" }}>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="me-3 d-flex align-items-center justify-content-center fw-bold" style={{ width: "24px", height: "24px", background: "rgba(218, 159, 91, 0.15)", color: "#DA9F5B", borderRadius: "50%", fontSize: "12px" }}>✓</span>
                                    <span className="fw-semibold" style={{ color: "#3a2823" }}>Kualitas kopi yang konsisten</span>
                                </li>
                                <li className="mb-3 d-flex align-items-center">
                                    <span className="me-3 d-flex align-items-center justify-content-center fw-bold" style={{ width: "24px", height: "24px", background: "rgba(218, 159, 91, 0.15)", color: "#DA9F5B", borderRadius: "50%", fontSize: "12px" }}>✓</span>
                                    <span className="fw-semibold" style={{ color: "#3a2823" }}>Pengalaman ngopi bergaya urban</span>
                                </li>
                                <li className="mb-4 d-flex align-items-center">
                                    <span className="me-3 d-flex align-items-center justify-content-center fw-bold" style={{ width: "24px", height: "24px", background: "rgba(218, 159, 91, 0.15)", color: "#DA9F5B", borderRadius: "50%", fontSize: "12px" }}>✓</span>
                                    <span className="fw-semibold" style={{ color: "#3a2823" }}>Ruang ngopi yang nyaman dan modern</span>
                                </li>
                            </ul>

                            <a 
                                href="/login" 
                                className="btn px-4 py-2.5 shadow-sm text-white fw-bold d-inline-flex align-items-center"
                                style={{
                                    background: "#DA9F5B",
                                    borderRadius: "10px",
                                    fontSize: "14px",
                                    transition: "all 0.3s ease",
                                    border: "none"
                                }}
                                onMouseOver={(e) => e.target.style.background = "#bc8443"}
                                onMouseOut={(e) => e.target.style.background = "#DA9F5B"}
                            >
                                Login untuk Memulai <i className="bi bi-person-fill ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
