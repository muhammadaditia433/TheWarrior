import { useEffect, useState } from "react";

// --- IMPORT ASET GAMBAR LOKAL ---
import slide1 from "../assets/carousel-1.jpg";
import slide2 from "../assets/carousel-2.jpg";
import slide3 from "../assets/bg.jpg";
import slide4 from "../assets/about.png";

function Hero() {
  const slides = [
    {
      image: slide1,
      top: "Pengalaman Ngopi Modern",
      title: "KOPIJAK",
      subtitle: "KOPI URBAN JAKARTA",
    },
    {
      image: slide2,
      top: "Menghadirkan Kopi untuk",
      title: "URBAN JAKARTA",
      subtitle: "SEJAK 2024",
    },
    {
      image: slide3,
      top: "Rasa Otentik Nusantara",
      title: "BIJI PILIHAN",
      subtitle: "DISORTIR OLEH BARISTA AHLI",
    },
    {
      image: slide4,
      top: "Tempat Berkumpul Masyarakat Kota",
      title: "THE WARRIOR CAFE",
      subtitle: "KENYAMANAN RUANG MODERN",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif"
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            inset: 0,
            // DIPERBAIKI: Mengurangi ketebalan rgba hitam dari 0.55/0.7 menjadi 0.4/0.5 agar gambar & teks jauh lebih terang
            backgroundImage: `linear-gradient(rgba(15, 10, 9, 0.40), rgba(15, 10, 9, 0.55)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: current === index ? 1 : 0,
            zIndex: current === index ? 1 : 0,
            transform: current === index ? "scale(1.05)" : "scale(1)",
            transition: "opacity 1.2s ease-in-out, transform 6s ease-out",
          }}
        >
          {/* Konten Teks Tengah */}
          <div 
            className="container h-100 d-flex flex-column justify-content-center align-items-center text-center text-white"
            style={{
              transform: current === index ? "translateY(0)" : "translateY(25px)",
              transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <h5
              style={{
                color: "#DA9F5B",
                fontWeight: 700,
                letterSpacing: "5px",
                fontSize: "clamp(14px, 2.5vw, 19px)",
                textTransform: "uppercase",
                marginBottom: "15px",
                // MENAMBAHKAN Efek Bayangan Teks agar kontras tajam di latar terang/gelap
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)"
              }}
            >
              {slide.top}
            </h5>

            <h1
              className="fw-bold text-white"
              style={{
                fontSize: "clamp(50px, 8.5vw, 95px)",
                // DIPERBAIKI: Menggunakan bayangan text berlapis (Drop Shadow) agar teks putih menyala keluar
                textShadow: "0 4px 15px rgba(0, 0, 0, 0.6), 0 8px 30px rgba(0, 0, 0, 0.8)",
                lineHeight: "1.1",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              {slide.title}
            </h1>

            <h3
              style={{
                fontSize: "clamp(16px, 3vw, 24px)",
                fontWeight: 600,
                letterSpacing: "4px",
                color: "#ffffff",
                textTransform: "uppercase",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.8)",
                borderTop: "2px solid rgba(218, 159, 91, 0.6)", // Memberikan garis aksen emas pemisah di bawah judul
                paddingTop: "12px",
                display: "inline-block"
              }}
            >
              {slide.subtitle}
            </h3>
          </div>
        </div>
      ))}

      {/* Tombol Navigasi Kiri */}
      <button
        onClick={handlePrev}
        className="btn d-none d-md-flex align-items-center justify-content-center"
        style={{
          position: "absolute",
          left: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.3)",
          color: "#fff",
          zIndex: 10,
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(4px)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = "#DA9F5B"; e.currentTarget.style.borderColor = "#DA9F5B"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
        onMouseOut={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.25)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
      >
        &#10094;
      </button>

      {/* Tombol Navigasi Kanan */}
      <button
        onClick={handleNext}
        className="btn d-none d-md-flex align-items-center justify-content-center"
        style={{
          position: "absolute",
          right: "40px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.3)",
          color: "#fff",
          zIndex: 10,
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(4px)",
          transition: "all 0.3s ease"
        }}
        onMouseOver={(e) => { e.currentTarget.style.background = "#DA9F5B"; e.currentTarget.style.borderColor = "#DA9F5B"; e.currentTarget.style.transform = "translateY(-50%) scale(1.08)"; }}
        onMouseOut={(e) => { e.currentTarget.style.background = "rgba(0,0,0,0.25)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; e.currentTarget.style.transform = "translateY(-50%) scale(1)"; }}
      >
        &#10095;
      </button>

      {/* Indikator Bar Horizontal Presentasi */}
      <div
        style={{
          position: "absolute",
          bottom: "45px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "10px",
          zIndex: 10
        }}
      >
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: current === i ? "40px" : "15px",
              height: "4px",
              borderRadius: "4px",
              cursor: "pointer",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              background: current === i ? "#DA9F5B" : "rgba(255,255,255,0.4)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)"
            }}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
