import LoginForm from "../components/LoginForm";
import bg from "../assets/bg.jpg";

function Login() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.65)), url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="d-flex align-items-center"
        >
            <div className="container">
                <div className="row align-items-center">

                    <div className="col-lg-6 text-white mb-5">

                        <h5 style={{ color: "#DA9F5B" }}>
                            SELAMAT DATANG
                        </h5>

                        <h1
                            className="fw-bold"
                            style={{
                                fontSize: "70px",
                                color: "#ffffff",
                                textShadow: "0 5px 15px rgba(0,0,0,.6)",
                                letterSpacing: "2px",
                            }}
                        >
                            KOPIJAK
                        </h1>

                        <h3 style={{ color: "#DA9F5B", fontWeight: 600, letterSpacing: "3px" }}>
                            Kopi Urban Jakarta
                        </h3>

                        <p className="mt-4">
                            Login untuk mulai melakukan pemesanan,
                            reservasi, dan menikmati promo eksklusif.
                        </p>

                    </div>

                    <div className="col-lg-6 d-flex justify-content-center">

                        <LoginForm />

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;