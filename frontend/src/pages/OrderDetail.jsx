import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, CreditCard, Coffee, Receipt, Calendar } from "lucide-react"; 
import UserNavbar from "../components/UserNavbar";

function OrderDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchDetail = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    `http://localhost:5000/api/orders/detail/${id}`
                );
                setDetail(res.data);
            } catch (err) {
                console.error("Gagal memuat detail pesanan:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [id]);

    // Logika perhitungan total harga asli Anda
    const total = detail.reduce((sum, item) => sum + item.subtotal, 0);

    // Fungsi pembuat badge status transparan elegan dengan kontras teks tinggi
    const getStatusBadge = (status) => {
        switch (status) {
            case "Selesai":
                return <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 fw-bold">✓ Selesai</span>;
            case "Diproses":
                return <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-bold">⚙ Diproses</span>;
            default:
                // Warna background pastel kekuningan dengan warna tulisan cokelat tua gelap agar terbaca jelas
                return (
                    <span 
                        className="badge rounded-pill px-3 py-2 fw-bold border"
                        style={{ 
                            backgroundColor: "#fff3cd", 
                            color: "#856404", 
                            borderColor: "#ffeeba"
                        }}
                    >
                        ⏳ {status || "Menunggu Pembayaran"}
                    </span>
                );
        }
    };

    return (
        <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <UserNavbar />

            <div className="container py-5" style={{ paddingTop: "120px", maxWidth: "850px" }}>
                
                {/* Tombol Kembali Atas Minimalis */}
                <button 
                    onClick={() => navigate("/history")} 
                    className="btn btn-link text-decoration-none text-secondary p-0 mb-4 d-inline-flex align-items-center gap-2 fw-medium"
                >
                    <ArrowLeft size={18} /> Kembali ke Riwayat
                </button>

                {/* Bagian Header Ringkasan Struk */}
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
                    <div>
                        <h2 className="fw-bold m-0 text-dark fs-3">Detail Pesanan</h2>
                        <p className="text-muted m-0 small">Nota Pembelian: <span className="fw-semibold text-dark">#{id}</span></p>
                    </div>
                    {detail.length > 0 && getStatusBadge(detail[0].status)}
                </div>

                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border text-warning" role="status"></div>
                    </div>
                ) : detail.length === 0 ? (
                    <div className="text-center py-5 bg-white rounded-4 shadow-sm border p-4">
                        <p className="text-muted m-0">Memuat data rincian pesanan...</p>
                    </div>
                ) : (
                    <div className="row g-4">
                        {/* Sisi Kiri: Daftar Keranjang Kopi / Item Yang Dibeli */}
                        <div className="col-md-7">
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                                <h6 className="fw-bold text-dark border-bottom pb-3 mb-3 d-flex align-items-center gap-2">
                                    <Coffee size={18} className="text-secondary" /> Produk Dipesan
                                </h6>
                                
                                <div className="d-flex flex-column gap-3">
                                    {detail.map((item, index) => (
                                        <div key={index} className="d-flex justify-content-between align-items-center py-2 border-bottom border-light-subtle last-border-none">
                                            <div>
                                                <h6 className="fw-bold text-dark m-0 fs-6">{item.nama}</h6>
                                                <span className="text-muted small">Porsi: {item.qty}x</span>
                                            </div>
                                            <span className="fw-semibold text-dark">
                                                Rp {item.subtotal.toLocaleString("id-ID")}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sisi Kanan: Info Transaksi & Total Akhir */}
                        <div className="col-md-5 d-flex flex-column gap-4">
                            {/* Card Info Pembayaran */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                                <h6 className="fw-bold text-dark border-bottom pb-3 mb-3 d-flex align-items-center gap-2">
                                    <CreditCard size={18} className="text-secondary" /> Transaksi
                                </h6>
                                <div className="mb-3">
                                    <span className="text-muted d-block small">Metode Pembayaran</span>
                                    <span className="fw-bold text-dark fs-6">{detail[0].metode}</span>
                                </div>
                                <div>
                                    <span className="text-muted d-block small">Waktu Pemesanan</span>
                                    <span className="text-secondary small d-flex align-items-center gap-1 mt-1">
                                        <Calendar size={14} /> 
                                        {detail[0].tanggal ? new Date(detail[0].tanggal).toLocaleDateString("id-ID", {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric"
                                        }) : "24 Juni 2026"}
                                    </span>
                                </div>
                            </div>

                            {/* Card Total Harga Gaya Invoice Gelap */}
                            <div className="card border-0 shadow-sm rounded-4 p-4 text-white mt-auto" style={{ backgroundColor: "#211613" }}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <span className="opacity-75 small d-block uppercase tracking-wider fw-medium mb-1">TOTAL BAYAR</span>
                                        <h3 className="fw-extrabold m-0 display-6" style={{ color: "#DA9F5B", letterSpacing: "-1px" }}>
                                            Rp {total.toLocaleString("id-ID")}
                                        </h3>
                                    </div>
                                    <Receipt size={36} className="opacity-25" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}

export default OrderDetail;
