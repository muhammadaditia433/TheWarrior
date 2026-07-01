import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import qrisLocalImage from "../assets/Qris.jpg";

function Payment() {
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(300); // 5 Menit hitung mundur
    const [isChecking, setIsChecking] = useState(false); // State saat sistem mengecek mutasi
    const [paymentSuccess, setPaymentSuccess] = useState(false); // State sukses murni

    const totalBayar = localStorage.getItem("totalBayar") || "0";

    // Efek Countdown Timer
    useEffect(() => {
        if (timeLeft === 0) {
            alert("⏰ Waktu pembayaran habis. Silakan pesan kembali.");
            navigate("/cart");
            return;
        }
        const timer = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft, navigate]);

    // Fungsi simulasi ketika user berpura-pura men-scan QRIS lewat e-wallet mereka
    const handleSimulateScan = () => {
        setIsChecking(true); // Nyalakan animasi loading deteksi

        // Berikan jeda waktu 3 detik seolah-olah sistem bank sedang mengecek uang masuk
        setTimeout(() => {
            setIsChecking(false);
            setPaymentSuccess(true); // Pembayaran dinyatakan sah & berhasil!
        }, 3000);
    };

    const handleDone = () => {
        localStorage.removeItem("totalBayar");
        alert("Pesanan berhasil dikonfirmasi oleh sistem!");
        navigate("/history");
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60).toString().padStart(2, "0");
        const s = (seconds % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
    };

    return (
        <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <UserNavbar />

            <div className="container py-5 d-flex flex-column align-items-center" style={{ paddingTop: "40px", maxWidth: "500px" }}>
                <div className="card border-0 shadow-sm rounded-4 p-4 bg-white text-center w-100 mt-4">
                    
                    <h4 className="fw-extrabold text-dark mb-1">Pembayaran QRIS</h4>
                    <p className="text-muted small mb-4">Silakan scan kode QRIS KOPIJAK di bawah ini</p>

                    {/* Timer Batas Waktu */}
                    <div className="badge rounded-pill bg-danger-subtle text-danger px-3 py-2 fw-bold mb-4 fs-6">
                        ⏱ Batas Waktu: {formatTime(timeLeft)}
                    </div>

                    {/* QR Code Wrapper */}
                    <div 
                        className="p-3 bg-white border border-2 rounded-4 d-inline-block mx-auto mb-4 shadow-sm position-relative km-qris-box" 
                        style={{ width: "240px", height: "240px", cursor: !paymentSuccess && !isChecking ? "pointer" : "default" }}
                        onClick={!paymentSuccess && !isChecking ? handleSimulateScan : undefined}
                        title="Klik di sini untuk simulasi scan"
                    >
                        <img 
                            src={qrisLocalImage} 
                            alt="QRIS KOPIJAK"
                            className="w-100 h-100"
                            style={{ 
                                objectFit: "contain", 
                                opacity: isChecking ? 0.3 : 1,
                                transition: "all 0.3s ease"
                            }}
                        />

                        {/* Overlay Efek Detektor saat Tombol QRIS Di-klik / Di-scan */}
                        {isChecking && (
                            <div className="position-absolute top-50 start-50 translate-middle text-warning fw-bold small">
                                Scanning...
                            </div>
                        )}
                    </div>

                    {/* Hint Pembantu untuk Penguji/Dosen */}
                    {!paymentSuccess && !isChecking && (
                        <p className="text-warning-dark small bg-warning-subtle py-1.5 px-3 rounded-pill fw-medium mb-4 animate-pulse">
                            💡 Klik kotak barcode di atas untuk mensimulasikan scan e-wallet!
                        </p>
                    )}

                    {/* Nominal Harga Tagihan */}
                    <div className="bg-light p-3 rounded-3 border mb-4">
                        <span className="text-muted small d-block mb-1">TOTAL NOMINAL</span>
                        <h3 className="fw-extrabold m-0 text-dark" style={{ color: "#DA9F5B" }}>
                            Rp {parseInt(totalBayar).toLocaleString("id-ID")}
                        </h3>
                    </div>

                    {/* Logika Tampilan Status Interaktif Berdasarkan State Aksi */}
                    {isChecking && (
                        <div className="d-flex align-items-center justify-content-center gap-2 py-3 text-secondary">
                            <div className="spinner-border spinner-border-sm text-warning" role="status"></div>
                            <span className="small font-pulse">Memverifikasi mutasi saldo rekening KOPIJAK...</span>
                        </div>
                    )}

                    {!isChecking && !paymentSuccess && (
                        <button 
                            className="btn btn-dark w-100 py-2.5 fw-bold text-white rounded-3 border-0 shadow-sm"
                            style={{ backgroundColor: "#211613" }}
                            onClick={handleSimulateScan}
                        >
                            📱 Selesai Scan / Bayar Manual
                        </button>
                    )}

                    {paymentSuccess && (
                        <div className="py-2 animate-fade-in">
                            <div className="alert alert-success border-0 rounded-3 fw-bold py-2.5 mb-3 text-success bg-success-subtle">
                                🎉 Pembayaran Sukses Terverifikasi!
                            </div>
                            <button 
                                className="btn btn-warning w-100 py-2.5 fw-bold text-white rounded-3 shadow-none border-0" 
                                style={{ backgroundColor: "#DA9F5B" }} 
                                onClick={handleDone}
                            >
                                Selesaikan Pemesanan & Lihat Nota
                            </button>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default Payment;
