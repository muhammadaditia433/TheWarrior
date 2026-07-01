import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import AdminNavbar from "../components/AdminNavbar";

function AdminDashboard() {
    const [stats, setStats] = useState({ pendapatan: 0, pesanan: 0, pelanggan: 0 });
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        // Simulasi data grafik penjualan kafe (bisa dihubungkan ke backend nantinya)
        const mockData = [
            { name: "Senin", penjualan: 1200000, cups: 45 },
            { name: "Selasa", penjualan: 1850000, cups: 68 },
            { name: "Rabu", penjualan: 1500000, cups: 55 },
            { name: "Kamis", penjualan: 2300000, cups: 89 },
            { name: "Jumat", penjualan: 3100000, cups: 120 },
            { name: "Sabtu", penjualan: 4500000, cups: 175 },
            { name: "Minggu", penjualan: 3800000, cups: 140 },
        ];
        setChartData(mockData);

        // Ambil data riwayat pesanan dari API untuk menghitung statistik total real-time
        const fetchStats = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/orders");
                const totalPendapatan = res.data.reduce((sum, item) => sum + (item.total || 0), 0);
                
                // Menghitung jumlah pelanggan unik dari nama
                const uniqueUsers = new Set(res.data.map(item => item.nama)).size;

                setStats({
                    pendapatan: totalPendapatan || 18250000, // Fallback jika data kosong
                    pesanan: res.data.length || 687,
                    pelanggan: uniqueUsers || 142
                });
            } catch (err) {
                console.error("Gagal memuat statistik:", err);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="bg-light min-vh-100 pb-5" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <AdminNavbar />

            <div className="container py-5">
                {/* Header Title */}
                <div className="mb-5 text-start">
                    <h2 className="fw-extrabold m-0 text-dark fs-2">Analitik KOPIJAK</h2>
                    <p className="text-muted m-0 small">Pantau metrik penjualan, performa menu, dan pendapatan kafe urban Anda</p>
                </div>

                {/* Row 1: Stat Cards Premium */}
                <div className="row g-4 mb-5">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                            <span className="text-muted small fw-bold text-uppercase tracking-wider d-block mb-1">TOTAL PENDAPATAN</span>
                            <h2 className="fw-extrabold m-0 tracking-tight text-dark">
                                Rp {stats.pendapatan.toLocaleString("id-ID")}
                            </h2>
                            <span className="text-success small fw-semibold mt-2 d-block">↗ 12% dari minggu lalu</span>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                            <span className="text-muted small fw-bold text-uppercase tracking-wider d-block mb-1">TOTAL PESANAN</span>
                            <h2 className="fw-extrabold m-0 tracking-tight text-dark">{stats.pesanan} Order</h2>
                            <span className="text-success small fw-semibold mt-2 d-block">↗ 8% produk terjual</span>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white">
                            <span className="text-muted small fw-bold text-uppercase tracking-wider d-block mb-1">PELANGGAN AKTIF</span>
                            <h2 className="fw-extrabold m-0 tracking-tight text-dark">{stats.pelanggan} User</h2>
                            <span className="text-success small fw-semibold mt-2 d-block">↗ 15% akun baru</span>
                        </div>
                    </div>
                </div>

                {/* Row 2: Grafis Grafik Visual */}
                <div className="row g-4">
                    {/* Grafik 1: Tren Omset */}
                    <div className="col-lg-7">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                            <h5 className="fw-bold text-dark mb-4">Tren Pendapatan Mingguan</h5>
                            <div style={{ width: "100%", height: 300 }}>
                                <ResponsiveContainer>
                                    <LineChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" stroke="#6c757d" fontSize={12} />
                                        <YAxis stroke="#6c757d" fontSize={12} tickFormatter={(v) => `Rp ${v/1000}k`} />
                                        <Tooltip formatter={(value) => [`Rp ${value.toLocaleString("id-ID")}`, "Pendapatan"]} />
                                        <Line type="monotone" dataKey="penjualan" stroke="#DA9F5B" strokeWidth={3} dot={{ r: 5 }} activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    {/* Grafik 2: Produk Terjual */}
                    <div className="col-lg-5">
                        <div className="card border-0 shadow-sm rounded-4 p-4 bg-white h-100">
                            <h5 className="fw-bold text-dark mb-4">Volume Produk Terjual (Cups)</h5>
                            <div style={{ width: "100%", height: 300 }}>
                                <ResponsiveContainer>
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                        <XAxis dataKey="name" stroke="#6c757d" fontSize={12} />
                                        <YAxis stroke="#6c757d" fontSize={12} />
                                        <Tooltip formatter={(value) => [value, "Cups"]} />
                                        <Bar dataKey="cups" fill="#211613" borderRadius={[6, 6, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;
