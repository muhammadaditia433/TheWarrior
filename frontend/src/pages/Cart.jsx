import { useContext } from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Receipt } from "lucide-react"; // Ganti teks biasa jika belum instal lucide
import UserNavbar from "../components/UserNavbar";
import { CartContext } from "../context/CartContext";

function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeCart,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.harga * item.qty,
    0
  );

  return (
    <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <UserNavbar />

      <div className="container py-5" style={{ paddingTop: "40px" }}>
        
        {/* Header Title */}
        <div className="text-center mb-5 mt-4">
          <h2 className="fw-bold mb-2 text-dark fs-2">Keranjang Belanja</h2>
          <div className="mx-auto my-3" style={{ width: "50px", height: "3px", background: "#DA9F5B", borderRadius: "2px" }}></div>
          <p className="text-muted small">Kelola pesanan seduhan kopi dan menu favoritmu sebelum melakukan pembayaran</p>
        </div>

        {cart.length === 0 ? (
          /* Tampilan Bagus Jika Keranjang Kosong */
          <div className="row justify-content-center">
            <div className="col-md-6 text-center py-5 bg-white rounded-4 shadow-sm border p-5">
              <div className="p-4 bg-light d-inline-block rounded-circle mb-3 text-muted">
                <ShoppingBag size={40} />
              </div>
              <h5 className="fw-bold text-dark mb-2">Keranjang Anda Masih Kosong ☕</h5>
              <p className="text-muted small mb-4">Mari jelajahi katalog menu urban terbaik kami dan temukan minuman favoritmu.</p>
              <Link to="/menu" className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ backgroundColor: "#DA9F5B", borderColor: "#DA9F5B" }}>
                <ArrowLeft size={16} /> Lihat Menu KOPIJAK
              </Link>
            </div>
          </div>
        ) : (
          /* Layout Keranjang Belanja Modern */
          <div className="row g-4 justify-content-center">
            
            {/* Kolom Kiri: Daftar Produk */}
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-3">
                {cart.map((item) => (
                  <div
                    className="card border-0 shadow-sm rounded-4 p-4 bg-white"
                    key={item.id}
                  >
                    <div className="row align-items-center g-3">
                      {/* Informasi Nama & Harga Satuan */}
                      <div className="col-md-5 col-12 text-start">
                        <h5 className="fw-bold text-dark mb-1 fs-5">{item.nama}</h5>
                        <p className="text-muted m-0 small fw-medium">
                          Rp {item.harga.toLocaleString("id-ID")} / porsi
                        </p>
                      </div>

                      {/* Pengatur Kuantitas (Quantity Spacing) */}
                      <div className="col-md-3 col-6 d-flex justify-content-md-center justify-content-start align-items-center">
                        <div className="d-inline-flex align-items-center bg-light p-1 rounded-pill border">
                          <button
                            className="btn btn-sm btn-white rounded-circle border-0 p-1 d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                            onClick={() => decreaseQty(item.id)}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="mx-3 fw-bold text-dark fs-6" style={{ minWidth: "20px", textOrder: "center" }}>
                            {item.qty}
                          </span>
                          <button
                            className="btn btn-sm btn-white rounded-circle border-0 p-1 d-flex align-items-center justify-content-center"
                            style={{ width: "28px", height: "28px" }}
                            onClick={() => increaseQty(item.id)}
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal Item */}
                      <div className="col-md-3 col-4 text-md-end text-start">
                        <span className="text-muted d-block d-md-none small">Subtotal</span>
                        <span className="fw-bold text-dark fs-5">
                          Rp {(item.harga * item.qty).toLocaleString("id-ID")}
                        </span>
                      </div>

                      {/* Tombol Hapus Sampah */}
                      <div className="col-md-1 col-2 text-end">
                        <button
                          className="btn btn-link text-danger p-2 shadow-none border-0 rounded-circle"
                          style={{ background: "rgba(220, 53, 69, 0.05)" }}
                          onClick={() => removeCart(item.id)}
                          title="Hapus Item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Kolom Kanan: Ringkasan Belanja & Checkout */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 bg-white position-sticky" style={{ top: "110px" }}>
                <h5 className="fw-bold text-dark border-bottom pb-3 mb-4 d-flex align-items-center gap-2">
                  <Receipt size={20} className="text-secondary" /> Ringkasan Pembelian
                </h5>
                
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <span className="text-secondary fw-medium">Total Harga</span>
                  <h4 className="fw-extrabold m-0" style={{ color: "#DA9F5B", letterSpacing: "-0.5px" }}>
                    Rp {total.toLocaleString("id-ID")}
                  </h4>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-warning w-100 py-3 fw-bold text-white rounded-3 border-0 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                  style={{ backgroundColor: "#DA9F5B" }}
                >
                  Lanjut ke Checkout
                </Link>
                
                <Link to="/menu" className="btn btn-link text-decoration-none w-100 text-center text-secondary small mt-3 fw-medium">
                  ← Tambah Menu Lain
                </Link>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;
