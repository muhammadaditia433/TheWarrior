import { NavLink, Link, useNavigate } from "react-router-dom"; 
import logo from "../assets/logo.png";

function UserNavbar() {
  const navigate = useNavigate();

  // Fungsi Logout dengan 2 Opsi (Ya / Tidak) via window.confirm
  const handleLogout = () => {
    const yakinKeluar = window.confirm("Apakah Anda yakin ingin keluar dari akun KOPIJAK? \n\nKlik 'OK' untuk Ya\nKlik 'Cancel' untuk Tidak");
    
    if (yakinKeluar) {
      localStorage.removeItem("user"); // Menghapus data login dari browser Anda
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
        
        {/* Logo & Brand KOPIJAK */}
        <Link
          to="/dashboard"
          className="navbar-brand d-flex align-items-center fw-bold fs-4 gap-2 m-0"
          style={{ textDecoration: "none" }}
        >
          <img
            src={logo}
            alt="KOPIJAK"
            style={{
              height: "42px",
              objectFit: "contain",
              transition: "transform 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseOut={(e) => e.target.style.transform = "scale(1)"}
          />
          <span className="fw-extrabold tracking-widest" style={{ color: "#DA9F5B", fontSize: "19px" }}>
            KOPIJAK
          </span>
        </Link>

        {/* Tombol Responsive Mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#userNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Navigasi Kanan */}
        <div className="collapse navbar-collapse" id="userNavbar">
          <ul className="navbar-nav ms-auto align-items-center gap-2 mt-3 mt-lg-0">
            
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                } 
                to="/menu"
              >
                Menu
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                } 
                to="/history"
              >
                Riwayat
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link px-3 fs-6 position-relative ${isActive ? "text-amber-active active-indicator" : "text-white-opacity"}`
                } 
                to="/cart"
              >
                🛒 Keranjang
              </NavLink>
            </li>

            {/* TOMBOL LOGOUT: Menggunakan onClick dengan fungsi javascript langsung */}
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

export default UserNavbar;
