import { NavLink, Link, useNavigate } from "react-router-dom";

function AdminNavbar() {
    const navigate = useNavigate();

    // Fungsi Logout dengan 2 Opsi Konfirmasi (Ya / Tidak)
    const handleLogout = () => {
        const yakinKeluar = window.confirm(
            "Apakah Anda yakin ingin keluar dari Panel Admin KOPIJAK? \n\nKlik 'OK' untuk Ya\nKlik 'Cancel' untuk Tidak"
        );
        
        if (yakinKeluar) {
            localStorage.removeItem("user"); // Menghapus data login dari browser
            navigate("/"); // Mengarahkan kembali ke halaman login utama
        }
    };

    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm py-2"
            style={{
                background: "#2d1b12",
                position: "sticky",
                top: 0,
                width: "100%",
                zIndex: 1050,
                minHeight: "75px"
            }}
        >
            <div className="container">
                {/* Brand KOPIJAK ADMIN */}
                <Link
                    to="/admin/dashboard"
                    className="navbar-brand fw-bold fs-4 m-0"
                    style={{ textDecoration: "none" }}
                >
                    <span className="fw-extrabold tracking-widest" style={{ color: "#DA9F5B", fontSize: "19px" }}>
                        KOPIJAK ADMIN
                    </span>
                </Link>

                {/* Tombol Hamburger Menu untuk Layar Kecil/Mobile */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#adminNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Menu Navigasi Tengah & Kanan */}
                <div className="collapse navbar-collapse" id="adminNavbar">
                    <ul className="navbar-nav ms-auto align-items-center gap-2 mt-3 mt-lg-0">
                        
                        {/* 1. MENU DASHBOARD (MENU BARU) */}
                        <li className="nav-item">
                            <NavLink
                                to="/admin/dashboard"
                                className={({ isActive }) =>
                                    `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>

                        {/* 2. Navigasi Kelola Menu */}
                        <li className="nav-item">
                            <NavLink
                                to="/admin/menu"
                                className={({ isActive }) =>
                                    `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                                }
                            >
                                Menu
                            </NavLink>
                        </li>

                        {/* 3. Navigasi Kelola Pesanan */}
                        <li className="nav-item">
                            <NavLink
                                to="/admin/orders"
                                className={({ isActive }) =>
                                    `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                                }
                            >
                                Pesanan
                            </NavLink>
                        </li>

                        {/* 4. Navigasi Kelola User */}
                        <li className="nav-item">
                            <NavLink
                                to="/admin/users"
                                className={({ isActive }) =>
                                    `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                                }
                            >
                                User
                            </NavLink>
                        </li>

                        {/* Tombol Logout Interaktif */}
                        <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <button
                                className="btn btn-warning fw-bold px-4 py-2 rounded-pill shadow-sm border-0"
                                style={{ backgroundColor: "#DA9F5B", color: "#2d1b12" }}
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default AdminNavbar;
