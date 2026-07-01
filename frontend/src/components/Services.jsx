import React from "react";
import service1 from "../assets/service-1.jpg";
import service2 from "../assets/service-2.jpg";
import service3 from "../assets/service-3.jpg";
import service4 from "../assets/service-4.jpg";

function Services() {
    const serviceList = [
        {
            img: service1,
            title: "Layanan Antar Kopi",
            desc: "Menyediakan layanan pengantaran kopi dengan cepat, praktis, dan tetap menjaga kesegaran rasa hingga ke tangan Anda."
        },
        {
            img: service2,
            title: "Biji Kopi Berkualitas",
            desc: "Menggunakan biji kopi pilihan nusantara dengan kualitas terbaik yang disortir langsung secara ketat."
        },
        {
            img: service3,
            title: "Standar Kualitas Terjaga",
            desc: "Setiap proses penyajian dilakukan dengan standar operasional barista berpengalaman untuk rasa yang konsisten."
        },
        {
            img: service4,
            title: "Reservasi Online",
            desc: "Memudahkan pelanggan urban Jakarta melakukan pemesanan tempat atau reservasi meja secara online dan praktis."
        }
    ];

    return (
        <section
            id="services"
            className="container py-5"
            style={{ fontFamily: "'Poppins', sans-serif", paddingTop: "80px", paddingBottom: "80px" }}
        >
            {/* Bagian Judul Seksi */}
            <div className="section-title text-center mb-5">
                <h5 style={{ color: "#DA9F5B", letterSpacing: "5px", fontWeight: "600" }}>
                    LAYANAN KAMI
                </h5>
                <h1 className="fw-bold mt-2" style={{ color: "#211613" }}>
                    Layanan Unggulan KOPIJAK
                </h1>
                <div 
                    className="mx-auto my-3" 
                    style={{ width: "50px", height: "3px", background: "#DA9F5B" }}
                ></div>
            </div>

            {/* Bagian Grid Layanan */}
            <div className="row g-4">
                {serviceList.map((service, index) => (
                    <div className="col-lg-6" key={index}>
                        <div 
                            className="card border-0 h-100 shadow-sm d-flex flex-row align-items-center overflow-hidden"
                            style={{
                                borderRadius: "15px",
                                background: "#ffffff",
                                transition: "all 0.3s ease-in-out",
                                cursor: "pointer"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-5px)";
                                e.currentTarget.style.boxShadow = "0 12px 25px rgba(218, 159, 91, 0.12)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.03)";
                            }}
                        >
                            {/* Sisi Kiri: Gambar Layanan */}
                            <div style={{ width: "160px", height: "160px", flexShrink: 0 }}>
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>

                            {/* Sisi Kanan: Teks Konten */}
                            <div className="p-3 ms-2">
                                <h4 className="fw-bold mb-2" style={{ color: "#211613", fontSize: "18px" }}>
                                    {service.title}
                                </h4>
                                <p className="text-muted mb-0 lh-lg" style={{ fontSize: "13.5px" }}>
                                    {service.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
