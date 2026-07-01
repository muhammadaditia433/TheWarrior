import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserNavbar from "../components/UserNavbar";
import { CartContext } from "../context/CartContext";

function Checkout() {
    const navigate = useNavigate();
    const { cart, clearCart } = useContext(CartContext);

    const [jenis, setJenis] = useState("Dine In");
    const [payment, setPayment] = useState("Bayar Tunai");
    const [catatan, setCatatan] = useState("");
    const [loading, setLoading] = useState(false);
    
    // State Baru untuk Promo/Voucher
    const [voucher, setVoucher] = useState(localStorage.getItem("appliedVoucher") || "");
    const [diskon, setDiskon] = useState(0);

    // Proteksi jika keranjang kosong
    useEffect(() => {
        if (!cart || cart.length === 0) {
            navigate("/menu");
        }
    }, [cart, navigate]);

    // Kalkulasi Dasar
    const total = cart.reduce((sum, item) => sum + item.harga * item.qty, 0);

    // Logika Hitung Diskon berdasarkan Kode
    useEffect(() => {
        let potongan = 0;
        if (voucher === "KOPIJAK-MAHASISWA") {
            potongan = total * 0.15; // Diskon 15%
        } else if (voucher === "KOPIJAK-MEMBER") {
            potongan = 20000; // Diskon Rp 20.000
        } else if (voucher === "KOPIJAK-SENIN") {
            // Logika khusus buy 1 get 1 bisa disesuaikan di sini
            potongan = 0; 
        }
        setDiskon(potongan);
    }, [voucher, total]);

    const totalBayar = Math.max(0, total - diskon);

    const handleCheckout = async (e) => {
        if (e) e.preventDefault();
        if (loading) return;
        
        setLoading(true);
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) {
                alert("User tidak ditemukan");
                setLoading(false);
                return;
            }

            await axios.post("http://localhost:5000/api/orders/create", {
                user_id: user.id,
                metode: payment,
                cart: cart,
                total_bayar: totalBayar, // Mengirim total setelah diskon
                voucher: voucher
            });

            if (payment === "E-Wallet") {
                localStorage.setItem("totalBayar", totalBayar);
                navigate("/payment");
            } else {
                clearCart();
                localStorage.removeItem("appliedVoucher"); // Bersihkan voucher setelah checkout
                alert("Pesanan berhasil dibuat!");
                navigate("/history");
            }
        } catch (err) {
            console.error(err);
            alert("Gagal membuat pesanan");
        } finally {
            setLoading(false);
        }
    };

    const listBarang = cart.map((item) => (
        <div key={item.id} className="d-flex justify-content-between align-items-center py-2 border-bottom">
            <div>
                <span className="fw-bold text-dark d-block" style={{ fontSize: "14px" }}>{item.nama}</span>
                <span className="text-muted small">Porsi: {item.qty}x</span>
            </div>
            <span className="fw-bold text-dark">Rp {(item.qty * item.harga).toLocaleString("id-ID")}</span>
        </div>
    ));

    return (
        <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <UserNavbar />
            <div className="container py-5" style={{ paddingTop: "40px" }}>
                <div className="mb-4">
                    <button onClick={() => navigate("/cart")} className="btn btn-link text-decoration-none text-secondary p-0 mb-3 border-0">← Kembali</button>
                    <h2 className="fw-extrabold m-0 text-dark">Checkout</h2>
                </div>
                
                <div className="row g-4">
                    {/* Sisi Kiri: Form */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white d-flex flex-column gap-3">
                            <div>
                                <label className="form-label small fw-bold text-secondary mb-1">Nama Pemesan</label>
                                <input className="form-control bg-light" value={JSON.parse(localStorage.getItem("user"))?.nama || ""} readOnly />
                            </div>
                            <select className="form-select" value={jenis} onChange={(e) => setJenis(e.target.value)}>
                                <option value="Dine In">Dine In</option>
                                <option value="Take Away">Take Away</option>
                            </select>
                            <select className="form-select" value={payment} onChange={(e) => setPayment(e.target.value)}>
                                <option value="Bayar Tunai">Bayar Tunai</option>
                                <option value="E-Wallet">E-Wallet</option>
                            </select>
                            <textarea className="form-control" rows="3" placeholder="Catatan..." value={catatan} onChange={(e) => setCatatan(e.target.value)} />
                        </div>
                    </div>

                    {/* Sisi Kanan: Invoice & Voucher */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column gap-4 position-sticky" style={{ top: "110px" }}>
                            {/* Voucher Section */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                                <h6 className="fw-bold mb-3">Kode Voucher</h6>
                                <input 
                                    className="form-control mb-2" 
                                    value={voucher} 
                                    onChange={(e) => setVoucher(e.target.value.toUpperCase())} 
                                    placeholder="Masukkan kode promo..." 
                                />
                                {diskon > 0 && <small className="text-success fw-bold">Diskon terpasang: -Rp {diskon.toLocaleString("id-ID")}</small>}
                            </div>

                            {/* Ringkasan */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                                <h6 className="fw-bold border-bottom pb-3 mb-2">Ringkasan Pesanan</h6>
                                {listBarang}
                            </div>

                            {/* Total & Action */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-white" style={{ backgroundColor: "#211613" }}>
                                <span className="opacity-75 small">TOTAL PEMBAYARAN</span>
                                <h3 className="fw-extrabold display-6" style={{ color: "#DA9F5B" }}>
                                    Rp {totalBayar.toLocaleString("id-ID")}
                                </h3>
                                <button className="btn w-100 py-3 mt-3 fw-bold text-white" style={{ backgroundColor: "#DA9F5B" }} onClick={handleCheckout}>
                                    {loading ? "Memproses..." : "Konfirmasi Pesanan"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;