import bg from "../assets/bg.jpg";
import { Link } from "react-router-dom";

function HeroDashboard() {
    const user = JSON.parse(
    localStorage.getItem("user")
);
    return (
        <section
            style={{
                minHeight: "85vh",
                background: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div className="container text-white">

                <h5
                    style={{
                        color: "#DA9F5B",
                        letterSpacing: "4px",
                    }}
                >
                 Hai, {user?.nama} 
                 <br></br>
                 <br />
                 SELAMAT DATANG DI
                </h5>

                <h1
                    className="fw-bold"
                    style={{
                        fontSize: "5rem",
                        color: "#ffffff",
                        textShadow: "0 5px 15px rgba(0,0,0,.6)",
                        letterSpacing: "2px",
                    }}
                >
                    KOPIJAK
                </h1>

                <h2
                    style={{
                        color: "#DA9F5B",
                    }}
                >
                    Kopi Urban Jakarta
                </h2>

                <p
                    style={{
                        maxWidth: "650px",
                        marginTop: "20px",
                        fontSize: "18px",
                    }}
                >
                    Nikmati berbagai menu kopi dan minuman favorit dengan
                    pengalaman pemesanan yang cepat, mudah, dan modern.
                </p>

                <div className="mt-4">

                    <Link
                        to="/menu"
                        className="btn btn-warning btn-lg me-3"
                    >
                        Pesan Sekarang
                    </Link>

                    <Link
                        to="/history"
                        className="btn btn-outline-light btn-lg"
                    >
                        Riwayat Pesanan
                    </Link>

                </div>

            </div>
        </section>
    );
}

export default HeroDashboard;