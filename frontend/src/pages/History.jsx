import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Calendar, Receipt, ChevronRight, ClipboardX, CreditCard } from "lucide-react"; 
import UserNavbar from "../components/UserNavbar";

function History() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoading(true);
            try {
                const user = JSON.parse(localStorage.getItem("user"));
                const res = await axios.get(
                    `http://localhost:5000/api/orders/user/${user.id}`
                );
                setOrders(res.data);
            } catch (err) {
                console.error("Gagal mengambil riwayat pesanan:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, []);

    const getStatusBadge = (status) => {
        switch (status) {
            case "Selesai":
                return <span className="badge rounded-pill bg-success-subtle text-success px-3 py-2 fw-bold fs-7 d-inline-flex align-items-center gap-1">✓ Selesai</span>;
            case "Diproses":
                return <span className="badge rounded-pill bg-primary-subtle text-primary px-3 py-2 fw-bold fs-7 d-inline-flex align-items-center gap-1">⚙ Diproses</span>;
            default:
                return (
                    <span 
                        className="badge rounded-pill px-3 py-2 fw-bold fs-7 border d-inline-flex align-items-center gap-1"
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

            <div className="container py-5" style={{ paddingTop: "40px" }}>
                {/* Header Title */}
                <div className="text-center mb-5 mt-4">
                    <h2 className="fw-bold mb-2 text-dark fs-2">Riwayat Pesanan</h2>
                    <div className="mx-auto my-3" style={{ width: "50px", height: "3px", background: "#DA9F5B", borderRadius: "2px" }}></div>
                    <p className="text-muted small">Pantau status transaksi belanja dan seduhan kopi urban Anda di sini</p>
                </div>

                {/* List Container */}
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10">
                        {loading ? (
                            <div className="text-center py-5">
                                <div className="spinner-border text-warning" role="status"></div>
                            </div>
                        ) : orders.length === 0 ? (
                            <div className="text-center py-5 bg-white rounded-4 shadow-sm border p-5">
                                <div className="p-4 bg-light d-inline-block rounded-circle mb-3 text-muted">
                                    <ClipboardX size={40} />
                                </div>
                                <h5 className="fw-bold text-dark mb-1">Belum Ada Pesanan</h5>
                                <p className="text-muted small mb-4">Anda belum pernah melakukan transaksi pembelian di KOPIJAK.</p>
                                <Link to="/menu" className="btn btn-warning text-white px-4 py-2 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: "#DA9F5B", borderColor: "#DA9F5B" }}>
                                    Pesan Sekarang
                                </Link>
                            </div>
                        ) : (
                            orders.map((item) => (
                                <div 
                                    key={item.id}
                                    className="card border-0 shadow-sm rounded-4 p-4 mb-4 bg-white border-start border-4"
                                    style={{ 
                                        transition: "transform 0.2s ease",
                                        borderColor: item.status === "Selesai" ? "#198754" : "#DA9F5B"
                                    }}
                                >
                                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3">
                                        
                                        {/* Sisi Kiri: Detail Informasi Nota */}
                                        <div className="d-flex align-items-center gap-4">
                                            {/* Kotak Ikon Struk Yang Diperbaiki Ukurannya */}
                                            <div className="p-3 bg-light rounded-4 text-secondary d-none d-sm-flex align-items-center justify-content-center" style={{ width: "55px", height: "55px" }}>
                                                <Receipt size={24} style={{ color: "#2d1b12" }} />
                                            </div>
                                            <div>
                                                <h4 className="fw-bold text-dark mb-2 fs-5">Order #{item.id}</h4>
                                                <div className="d-flex flex-wrap gap-3 text-muted align-items-center" style={{ fontSize: "13px" }}>
                                                    <span className="d-flex align-items-center gap-1 bg-light px-2 py-1 rounded border-0 text-secondary fw-medium">
                                                        <CreditCard size={14} className="me-1" /> {item.metode}
                                                    </span>
                                                    <span className="d-flex align-items-center gap-1 text-secondary">
                                                        <Calendar size={14} className="me-1" />
                                                        {new Date(item.tanggal).toLocaleDateString("id-ID", {
                                                            day: "numeric",
                                                            month: "short",
                                                            year: "numeric",
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sisi Kanan: Status & Tombol Navigasi Detail */}
                                        <div className="d-flex flex-row flex-md-column align-items-center align-items-md-end justify-content-between w-100 w-md-auto pt-3 pt-md-0 border-top border-md-top-0 border-light-subtle">
                                            <div className="mb-md-3">
                                                {getStatusBadge(item.status)}
                                            </div>
                                            <Link
                                                to={`/history/${item.id}`}
                                                className="btn btn-link text-decoration-none p-0 fw-bold d-flex align-items-center gap-1 shadow-none"
                                                style={{ fontSize: "14px", color: "#DA9F5B" }}
                                            >
                                                Lihat Detail Pesanan <ChevronRight size={16} />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default History;
