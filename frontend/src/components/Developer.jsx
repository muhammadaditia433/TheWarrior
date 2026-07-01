import React from "react";

// --- IMPORT SEMUA FOTO TIM ---
import fotoRiez from "../assets/owow.jpeg";
import fotoAditia from "../assets/Aditia.jpeg";
import fotoAlhijir from "../assets/Alhijir.jpeg";
import fotoFaqih from "../assets/Faqih.jpeg";
import fotoImanudin from "../assets/Imanudin.jpeg";

function Developer() {
    const members = [
        {
            name: "Riez Rafa Roro",
            role: "Fullstack Developer",
            image: fotoRiez,
        },
        {
            name: "Muhamad Aditia",
            role: "Fullstack Developer",
            image: fotoAditia,
        },
        {
            name: "Al Hijir",
            role: "Fullstack Developer",
            image: fotoAlhijir,
        },
        {
            name: "Muhamad Faqih Raya",
            role: "Fullstack Developer",
            image: fotoFaqih,
        },
        {
            name: "Muhammad Imanudin",
            role: "Fullstack Developer",
            image: fotoImanudin,
        },
    ];

    return (
        <section id="developer" className="container py-5" style={{ fontFamily: "'Poppins', sans-serif", paddingTop: "80px", paddingBottom: "80px" }}>
            {/* Bagian Judul Seksi */}
            <div className="section-title text-center mb-5">
                <h5
                    style={{
                        color: "#DA9F5B",
                        letterSpacing: "5px",
                        fontWeight: "600"
                    }}
                >
                    TEAM PENGEMBANG
                </h5>
                <h1 className="fw-bold mt-2" style={{ color: "#211613" }}>
                    THE WARRIOR
                </h1>
                <div 
                    className="mx-auto my-3" 
                    style={{ width: "50px", height: "3px", background: "#DA9F5B" }}
                ></div>
            </div>

            {/* Sub-Deskripsi Proyek */}
            <div className="text-center mb-5">
                <p className="text-muted fs-5 mx-auto" style={{ maxWidth: "650px" }}>
                    Website KOPIJAK dikembangkan oleh 
                    <strong style={{ color: "#211613" }}> Kelompok "The Warrior"</strong> selaku tim pengembang berdedikasi tinggi sebagai implementasi Proyek Akhir UAS Mata Kuliah 
                    <strong style={{ color: "#DA9F5B" }}> Pemrograman Fullstack</strong>.
                </p>
            </div>

            {/* Grid Anggota Tim */}
            <div className="row justify-content-center g-4">
                {members.map((member, index) => (
                    <div className="col-lg-4 col-md-6 mb-2" key={index}>
                        <div
                            className="card border-0 text-center p-4 h-100"
                            style={{
                                borderRadius: "24px",
                                background: "#ffffff",
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.04)",
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-8px)";
                                e.currentTarget.style.boxShadow = "0 15px 35px rgba(218, 159, 91, 0.12)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.04)";
                            }}
                        >
                            {/* Bingkai Lingkaran Foto dengan Properti ObjectPosition yang Dipertahankan */}
                            <img
                                src={member.image}
                                alt={member.name}
                                className="rounded-circle mx-auto mt-3 shadow-sm"
                                style={{
                                    width: "140px",
                                    height: "140px",
                                    objectFit: "cover",
                                    objectPosition: "center 20%",
                                    border: "3px solid rgba(218, 159, 91, 0.3)",
                                    padding: "4px"
                                }}
                            />

                            <h4 className="mt-4 fw-bold mb-1" style={{ color: "#211613", fontSize: "20px" }}>
                                {member.name}
                            </h4>

                            <p
                                className="fw-semibold small text-uppercase"
                                style={{
                                    color: "#DA9F5B",
                                    letterSpacing: "1px",
                                    marginBottom: "10px"
                                }}
                            >
                                {member.role}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Developer;
