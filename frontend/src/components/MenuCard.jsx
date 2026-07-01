import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function MenuCard({ menu }) {
  const { addToCart } = useContext(CartContext);
  
  // State kustomisasi racikan pembeli
  const [size, setSize] = useState("Regular");
  const [sugar, setSugar] = useState("Normal");
  const [ice, setIce] = useState("Normal Ice");

  // State baru untuk kontrol buka/tutup modal pop-up varian secara mandiri
  const [showModal, setShowModal] = useState(false);

  const handleAddToCartWithVarian = () => {
    // ID asli tetap dijaga (menu.id) agar sinkron dengan state CartContext Anda
    const itemKustom = {
      ...menu,
      id: menu.id, 
      nama: `${menu.nama} (${size} / ${sugar} / ${ice})` // Nama kustomisasi racikan masuk nota
    };
    
    addToCart(itemKustom);
    alert(`✅ ${menu.nama} berhasil ditambahkan ke keranjang!`);
    setShowModal(false); // Otomatis tutup jendela setelah sukses menambahkan
  };

  return (
    <>
      {/* KARTU MENU UTAMA */}
      <div 
        className="card h-100 border-0 bg-white w-100 position-relative d-flex flex-column justify-content-between text-start shadow-sm"
        style={{ borderRadius: "24px", overflow: "hidden", transition: "all 0.3s ease" }}
      >
        <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
          {menu.gambar ? (
            <img 
              src={menu.gambar.startsWith("http") ? menu.gambar : `http://localhost:5000/uploads/${menu.gambar}`} 
              alt={menu.nama} 
              className="w-100 h-100" 
              style={{ objectFit: "cover" }} 
            />
          ) : (
            <div className="w-100 h-100 bg-light d-flex align-items-center justify-content-center text-muted">☕</div>
          )}
          <span className="position-absolute top-0 start-0 m-3 px-3 py-1.5 badge rounded-pill bg-dark bg-opacity-75 text-white text-uppercase" style={{ fontSize: "11px" }}>
            {menu.kategori || "Coffee"}
          </span>
        </div>

        <div className="card-body p-4 d-flex flex-column justify-content-between h-100">
          <div className="mb-3">
            <h5 className="fw-bold text-dark mb-1 fs-5 text-truncate">{menu.nama}</h5>
            <p className="text-muted small mb-0 line-clamp-2" style={{ fontSize: "13px" }}>
              {menu.deskripsi || "Seduhan kopi urban istimewa penunjang produktivitas harianmu."}
            </p>
          </div>

          <div className="d-flex align-items-center justify-content-between pt-3 border-top border-light-subtle">
            <div>
              <span className="text-muted d-block" style={{ fontSize: "11px" }}>HARGA</span>
              <span className="fw-extrabold fs-5 text-dark" style={{ color: "#DA9F5B" }}>
                Rp {menu.harga ? menu.harga.toLocaleString("id-ID") : "0"}
              </span>
            </div>

            {/* UBAH EVENT: Menggunakan onClick state React langsung untuk membuka pop-up */}
            <button
              className="btn btn-warning rounded-pill px-3 py-2 fw-bold text-white shadow-none border-0"
              style={{ backgroundColor: "#DA9F5B", fontSize: "13px" }}
              onClick={() => setShowModal(true)}
            >
              + Tambah
            </button>
          </div>
        </div>
      </div>

      {/* JENDELA POP-UP VARIANT KUSTOM (Gaya Glassmorphism Terkontrol Modern) */}
      {showModal && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center animate-fade-in"
          style={{ 
            backgroundColor: "rgba(33, 22, 19, 0.5)", 
            backdropFilter: "blur(4px)",
            zIndex: 2000 
          }}
        >
          <div className="card border-0 shadow-lg p-4 bg-white mx-3 w-100" style={{ borderRadius: "24px", maxWidth: "400px" }}>
            
            <div className="d-flex justify-content-between align-items-center mb-3 border-bottom pb-2">
              <h5 className="fw-bold text-dark m-0 fs-5">Racik Minuman Anda</h5>
              <button type="button" className="btn-close shadow-none" onClick={() => setShowModal(false)}></button>
            </div>
            
            {/* Varian 1: Ukuran */}
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary mb-2">Pilih Ukuran Cup</label>
              <div className="d-flex gap-2">
                {["Regular", "Large"].map(v => (
                  <button key={v} type="button" onClick={() => setSize(v)} className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold flex-grow-1 border ${size === v ? "btn-dark text-white border-dark" : "btn-light text-secondary bg-white"}`}>{v}</button>
                ))}
              </div>
            </div>

            {/* Varian 2: Takaran Gula */}
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary mb-2">Tingkat Manis (Sugar)</label>
              <div className="d-flex gap-2">
                {["Less Sugar", "Normal", "Extra Sugar"].map(v => (
                  <button key={v} type="button" onClick={() => setSugar(v)} className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold flex-grow-1 border ${sugar === v ? "btn-dark text-white border-dark" : "btn-light text-secondary bg-white"}`}>{v}</button>
                ))}
              </div>
            </div>

            {/* Varian 3: Takaran Es Batu */}
            <div className="mb-4">
              <label className="form-label small fw-bold text-secondary mb-2">Takaran Es Batu (Ice)</label>
              <div className="d-flex gap-2">
                {["No Ice", "Normal Ice", "Extra Ice"].map(v => (
                  <button key={v} type="button" onClick={() => setIce(v)} className={`btn btn-sm rounded-pill px-3 py-2 fw-semibold flex-grow-1 border ${ice === v ? "btn-dark text-white border-dark" : "btn-light text-secondary bg-white"}`}>{v}</button>
                ))}
              </div>
            </div>

            {/* Tombol Konfirmasi Aksi Akhir */}
            <div className="d-flex gap-2 mt-2">
              <button type="button" className="btn btn-light rounded-3 fw-bold text-secondary px-3 py-2.5 flex-grow-1 border" onClick={() => setShowModal(false)}>Batal</button>
              <button type="button" className="btn btn-warning rounded-3 fw-bold text-white px-4 py-2.5 flex-grow-1 border-0" style={{ backgroundColor: "#DA9F5B" }} onClick={handleAddToCartWithVarian}>
                Masukkan
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default MenuCard;
