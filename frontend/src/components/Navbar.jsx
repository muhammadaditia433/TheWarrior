import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top w-100 px-0"
      style={{
        background: "rgba(15, 10, 9, 0.92)", // Sedikit lebih tebal agar teks menu sangat jelas terbaca
        backdropFilter: "blur(10px)", 
        zIndex: 9999,
        transition: "all 0.3s ease-in-out",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        paddingTop: "12px",
        paddingBottom: "12px"
      }}
    >
      <div className="container-fluid px-lg-5"> {/* Menggunakan container-fluid agar sebaran menu lebih luas */}
        <Link className="navbar-brand fw-bold fs-2" to="/" style={{ color: "#fff", letterSpacing: "1px" }}>
          KOPIJAK
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          {/* Menambahkan align-items-center agar teks satu baris sejajar lurus secara vertikal */}
          <ul className="navbar-nav align-items-center text-center">

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#about" style={{ fontSize: "15px" }}>
                Tentang Kami
              </a>
            </li>

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#services" style={{ fontSize: "15px" }}>
                Layanan
              </a>
            </li>

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#promo" style={{ fontSize: "15px" }}>
                Promo
              </a>
            </li>

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#menu" style={{ fontSize: "15px" }}>
                Menu Andalan
              </a>
            </li>

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#developer" style={{ fontSize: "15px" }}>
                Tim Pengembang
              </a>
            </li>

            <li className="nav-item mx-lg-2">
              <a className="nav-link fw-semibold" href="/#footer" style={{ fontSize: "15px" }}>
                Kontak Kami
              </a>
            </li>

            {/* Menata posisi tombol Login agar sejajar rapi */}
            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
              <Link
                to="/login"
                className="btn btn-outline-warning fw-bold px-4 py-1"
                style={{ borderRadius: "8px", fontSize: "15px" }}
              >
                Login
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
