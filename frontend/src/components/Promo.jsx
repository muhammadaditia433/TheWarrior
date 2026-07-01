import React from "react";
import promo1 from "../assets/icons/coffee.png"; 
import promo2 from "../assets/icons/promo_mhs.png"; 
import promo3 from "../assets/icons/promo_voucher.png"; 

function Promo() {
  const promoData = [
    { image: promo1, title: "Buy 1 Get 1", desc: "Berlaku hari Senin.", badge: "Senin Ceria", code: "KOPIJAK-SENIN" },
    { image: promo2, title: "Diskon Mahasiswa", desc: "Potongan 15% tunjukkan KTM.", badge: "Hemat Kampus", code: "KOPIJAK-MAHASISWA" },
    { image: promo3, title: "Voucher Member Baru", desc: "Potongan Rp20.000.", badge: "Spesial Pengguna", code: "KOPIJAK-MEMBER" }
  ];

  const handleClaim = (code) => {
    localStorage.setItem("appliedVoucher", code);
    alert(`Kode ${code} berhasil disalin! Silakan tempel di halaman Checkout.`);
  };

  return (
    <section id="promo" className="container py-5">
      {/* ... (Judul Seksi tetap sama) ... */}
      <div className="row g-4 justify-content-center">
        {promoData.map((promo, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="card h-100 border-0 text-center p-4" style={{ borderRadius: "20px", boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
              <div className="position-absolute top-0 end-0 m-3 px-3 py-1" style={{ background: "rgba(218, 159, 91, 0.1)", color: "#DA9F5B", fontSize: "12px", borderRadius: "30px" }}>{promo.badge}</div>
              <div className="mx-auto mt-3 mb-4" style={{ width: "80px", height: "80px", borderRadius: "50%", overflow: "hidden", border: "2px solid #DA9F5B" }}>
                <img src={promo.image} alt={promo.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <h4 className="fw-bold mb-3">{promo.title}</h4>
              <p className="text-muted" style={{ fontSize: "14px" }}>{promo.desc}</p>
              <div className="mt-auto">
                <hr />
                <button onClick={() => handleClaim(promo.code)} className="btn btn-link fw-bold text-decoration-none" style={{ color: "#DA9F5B" }}>
                  Klaim Promo Sekarang &rarr;
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Promo;